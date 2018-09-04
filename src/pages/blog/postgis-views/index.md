---
title:  "Using Postgres Views to Build Datasets for QGIS"
date: "2018-09-04T22:12:03.284Z"
---

Recently, I wanted to show a demographic breakdown of key parts of a town on Vancouver Island to my wife, but was unsure of what to use to display, and quickly. I had this database containing all of the longform data from the 2016 short form census that I build using [this handy repo](https://github.com/adventice/census), and in the same database, I had the shapefile import for the Dissemination Areas across Canada.

This tutorial shows you how to use Postgres _Views_ to capture data views, how to use it specifcially with the output of the [census database](https://github.com/adventice/census), how to take it one step further with Materialize Views, and how to use the results in QGIS.

## Figuring it Out

A Postgres _view_ is a queryable snapshot of a specific query. Another way to think about it is that each and every time you make a query in the database, you're creating a temporary table. When you build a _view_, this table that results from a normal query persists either until you remove it, or until the end of the session (if the option to do so is selected). This is useful in prototyping data, but not so much in retrieval in a production environment as it carries out the entire base query each time the view or a subset of it is called.

## Building it

The basics of _view_ creation are as easy as prepending a standard `SELECT`-query with `CREATE VIEW`. Here's an abstract example:

```sql
  CREATE VIEW test_view(
    col_1,
    col_2,
    col_3
  ) AS (
    SELECT
    --- SQL Query goes here
  )
```

The big thing is that the output of the select-query needs to output three columns, ideally aliased `AS` `col_1`, `col_2`, and `col_3`. This can modiified in many ways. But we're going to do it now with the census database built from the example in the start.

### Setting up the Sample Query

In this query, what we want to do is build a view that contains the proportion of couples who have children in disssemination areas across Canada. For this, we're going to need to build alias tables for `couples_with_children`, and `couples_without_children`, and we're going to need to tee that up with the geographic data for Canada.

#### Selecting Couples with Children

In the normalized census setup, we have a column called `dim`, which stands for the dimension, or line-item. If you look at any geographic census profile at the dissemintation area level, you'll see a table. Each one of these line items corresponds to a `dim` at a given table.

In this case, `dim=81` represents the total number of couples in a given area:

```sql
  SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 81;
```

This took around ~12222ms
![The result of the query](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/query-1.png)

#### Selecting Couples without Children

Second verse, same as the first. Just instead of the dim ID being 81, it's 83.

```sql
  SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 83;
```

This also took around ~12222ms
![The result of the query](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/query-2.png)

### Setting up the Join

We have two queries up now. Here, we want to join it with a geographic data table (which is also created in the census repo). We do that by building the following:

```sql
  WITH couples_total AS(
    SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 81
    AND
      value_total > 0
  ),

  couples_children AS(
    SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 83
    AND
      value_total > 0
  )

  SELECT
    geo.ogc_fid AS id,
    total.dauid AS dauid,
    (100 * children.total / total.total) AS ratio,
    geo.wkb_geometry AS geom
  FROM
    couples_total total
  JOIN
    couples_children children
  ON
    total.dauid = children.dauid
  JOIN
    canada_da_2016 geo
  ON
    total.dauid = geo.dauid
  ;
```

When I run this query, this is what I get:

![The result of the query](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/query-3.png)

It takes awhile (~26s) to process. Keep in mind that if you try this at home, you're dealing with the entirety of Canada!

The last thing is that we're going to want to limit the results to where the total is greater than zero. How would you limit that? I'll leave this as a thought exercise. The answer is down in the page!

We're good now. We can set up the view...

### Setting up the View

Okay. We have a query now. At this point, you'll recall that creating a view as easy as wrapping the query around `CREATE VIEW`:

```sql
  CREATE VIEW test_view(
    col_1,
    col_2,
    col_3
  ) AS (
    SELECT
    --- SQL Query goes here
  )
```

Here's how I do this for this particular query:

```sql
CREATE VIEW ratio_childbearing_couples(
  id,
  dauid,
  ratio,
  geom
)
 AS (

  WITH couples_total AS(
    SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 81
    AND
      value_total > 0
  ),

  couples_children AS(
    SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 83
    AND
      value_total > 0
  )

  SELECT
    geo.ogc_fid AS id,
    total.dauid AS dauid,
    (100 * children.total / total.total) AS ratio,
    geo.wkb_geometry AS geom
  FROM
    couples_total total
  JOIN
    couples_children children
  ON
    total.dauid = children.dauid
  JOIN
    canada_da_2016 geo
  ON
    total.dauid = geo.dauid
 );
```

Once you do this, you'll notice that it takes almost no time to build the view:

```
CREATE VIEW
Time: 27.426 ms
```

It's another thing to see the results.

### Verifying the View

At this point, you can verify the data as if this is a table.

```sql
SELECT * FROM ratio_childbearing_couples;
```

You should receive the following:

![This is verifying the view](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/query-4.png)

The time that it takes to query from the view is a _whopping_ 26 seconds!

This is good for one-offs to determine whether a view is good when testing, but it's no suitable way to subject people to production data...

### Materialized View

This is a good time to bring up Materialized Views. This is similar to a view, but it saves the results of the query as the view, as opposed to executing the query each time the `VIEW` is called. If you're building for production, this is an _excellent_ tool for displaying data, and we're going to do this now...

First, we're going to drop the plain view:

```sql
DROP VIEW ratio_childbearing_couples;
```

Next, we're going to build the materialized view. This is going to take awhile:

```sql
CREATE MATERIALIZED VIEW ratio_childbearing_couples(
  id,
  dauid,
  ratio,
  geom
)
 AS (

  WITH couples_total AS(
    SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 81
    AND
      value_total > 0
  ),

  couples_children AS(
    SELECT
      geo_id AS dauid,
      dim,
      value_total AS total
    FROM
      short_form_2016_da
    WHERE
      dim = 83
    AND
      value_total > 0
  )

  SELECT
    geo.ogc_fid AS id,
    total.dauid AS dauid,
    (100 * children.total / total.total) AS ratio,
    geo.wkb_geometry AS geom
  FROM
    couples_total total
  JOIN
    couples_children children
  ON
    total.dauid = children.dauid
  JOIN
    canada_da_2016 geo
  ON
    total.dauid = geo.dauid
 );
```

What we are doing is creating a static table that contains not the query instructions to capture the data, but the content across all of Canada. If space isn't a problem in your database, this is ideally what you want...

```
SELECT 54893
Time: 20863.456 ms (00:20.863)
```

Bam! you've created your first materialized view. Testing it should let you see how much faster this is at runtime:

```sql
SELECT * FROM ratio_childbearing_couples;
```

For me, it took only 2 seconds, which is a big improvement from 20! Now we're ready to run this in QGIS...

## Visualizing it through QGIS

This is a spatial-centric blog, so we're going to test this using QGIS. This exercise is taking place in QGIS 3.2.

### Connecting to the DB

Once we've opened, the hardest part is connecting to a DB. Find the DB Manager, and connect with it.

![DB Toolbar Loctation](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/add-postgis-layer.png)

Once it is open, create a new database, and test the connection. Once you have tha t done, move on. We want to go into the DB Manager:

You can do this by adding the `Database Toolbar` when right-clicking on the toolbar area in QGIS and then clicking on the DB symbol when it appears.

![DB Toolbar location](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/add-db-toolbar)

Once you open that up, find and select your layer, and click-and-drag to the QGIS map pane.

![Materialized View in QGIS](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/postgres-view/view-result.png)

From there, it's just a matter of styling!

## Conclusion

In this post, we've done a lot!

* We've built some queries,
* We've also used them to make aliased tables,
* We've used their results as a `VIEW`,
* We've taken this view, and made it into a `MATERIALIZED VIEW`; and,
* We've taken these results, and we've outputted it into QGIS!

Congratulations if you've followed through this far. This is the sort of work you can carry out if you want to build and check out demographic data quickly, and share it across your team!
