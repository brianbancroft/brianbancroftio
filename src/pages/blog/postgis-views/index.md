---
title:  "PostGIS Views"
date: "2018-09-04T22:12:03.284Z"
---

Recently, I wanted to show a demographic breakdown of key parts of a town on Vancouver Island to my wife, but was unsure of what to use to display, and quickly. I had this database containing all of the longform data from the 2016 short form census that I build using [this handy repo](https://github.com/adventice/census), and in the same database, I had the shapefile import for the Dissemination Areas across Canada.

## Figuring it Out

## Building it

### Setting up the Sample Query

### Setting up the Join

### Setting up the View

### Verifying the View

## Visualizing it through QGIS

This is a spatial-centric blog, so we're going to test this using QGIS.

### Connecting to the DB

### Connecting to the VIEW Table

### Loading

### Categorizing

### Errors. What to expect

- Dividing by Zero. This happened to me

## Final Structure

This is what my structure looks like in the end:

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
