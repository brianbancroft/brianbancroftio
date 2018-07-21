---
title:  "Building an MVT Server using Tegola, AWS and PostGIS"
date: "2018-07-04T22:12:03.284Z"
---

## Intro

ArcGIS Server, Mapbox Studio, GeoServer, MapServer. These are all fantastic heavyweight contenders that help you serve layers of data, but what if you just wanted something that would serve a handful of Mapbox Vector Tiles (MVT) layers without all of the other million-and-one things they offer? Good news!

![Good news.gif]()

_The open source world has you covered..._ There are currently at least three server applications which will let you do the think you want to do. Here, we're going to take use Tegola, a server application built on the Go language. This tutorial is build specifically for those who use Mac.

## Build it up locally
Before we can build something which we can deploy, first we need to build this. The following is how I build this from the ground up in a _local_ environment. By the end, we should have an environment where we can both build and test.

### Get the data
Before we can do anything, we _need_ a dataset. For the purposes of this tutorial, I've swindled a shapefile dataset provided kindly by the [_City of Ottawa_](http://data.ottawa.ca/dataset/wards-2014/resource/1b6112e5-3fe6-4976-8c8e-401a35d529a7). What we're going to do is we're going to take this data, and we're going to upload it into PostGIS. But before we go forward, you're going to need to download the following:

1. My sql dump of said shapefile - [download](./ottawa_wards.sql)
2. Postgres.app (at this point, this tutorial is for mac users) - [download](https://postgresapp.com/)
  - Postgres.app is the easiest way to use postgres on a mac in terms of config at the time of writing.
  - If you're using linux, [you probably already know how to get this going.](https://www.postgresql.org/download/linux)
  - If you're a windows user, I hear good things about PGAdmin..?

Once you have both items downloaded, we can move on to setting up the DB.

### Setting up the DB
Here, you're going to want to setup PostGIS, _then_ upload the data. This tutorial skips all the setup details of a Postgres database. Once you've figured all that out, you're going to want to start from the command line:

```
psql
```
Once in, you're going to want to create a new DB:
```
CREATE DATABASE scratch;
```
Okay. If that works, we can exit...

```
\q
```
...Only to go back in again...
```
psql scratch
```
Once in, you're going to want to create the postgis extension. This should work without any special installs on postgres.app and most other postgres installs:
```
CREATE EXTENSION postgis;
```

If you see the following:
```
CREATE EXTENSION
Time: 1795.743 ms (00:01.796)
```
You're good to `\q` and get out of there.

Now it's just a matter of importing the data. Assuming you're in the same directory as the dump file you just downloaded, carry out the following:

```
psql scratch < ottawa_wards.sql
```

This should take a few seconds. Once done, you can check your records through your favorite GIS program (QGIS) or through psql. Running a length query like the following should yield about 23 rows:

```
SELECT count(*) FROM "ottawa-wards";
```

At this point, your DB is set. Good job, time to move on...

### Get The Server

- Download Tegola for Mac
- Install Postgres.app


### Build a query
- Go into PostGIS.
- Enable Extension PostGIS
- Import Data
- Do a basic query
- Do a tegola-style query

### Setup Tegola
- Start the config.toml file
- Start the server
- Test the server using Curl.

### Use a service that takes advantage of it
- Write a basic mapbox GL tutorial map with a basic lines basemap using openmaptiles
-

## Start deploying

### Build the DB

### Build the EC2 Instance

### Set up Cloudflare, HTTPS,

## You're done!

Congrats. You've just built your first MVT Tile Server! DB's can be pricey, but there are ways to overcome even that hurdle! The next step, if you're happy with your data, is to convert that dataset into .mbtiles format, and place it into S3.
