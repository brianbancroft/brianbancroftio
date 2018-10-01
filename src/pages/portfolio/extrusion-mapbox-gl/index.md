---
title: MapboxGL JS Extrusion Map
date: "2018-08-02T10:12:03.284Z"
preview: https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/icon-extrusionmap-mapboxgl.jpg
---

![Header Image](https://s3.amazonaws.com/cdn.brianbancroft.io/images/brianbancroftio/portfolio/wide-extrusionmap-mapboxgl.png)

## A Bare-Bones Web-Choropleth

This is a quick 25-minute chropleth. You can [Visit the page here](http://mapbox-extrusion-choropleth.bancroft.io), and take the code yourself below.

This map has the following:

* Panning restrictions,
* A legend,
* Categorical styling,
* 2.5D!
* Polygons using GeoJSON; and,
* Loading via an API call.

## The Code

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8' />
  <title>Geojson Choropleth using MapboxGL</title>
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
  <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
  <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.css' rel='stylesheet' />
  <style>
    body {
      margin: 0;
      padding: 0;
    }

    #map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
    }

    .legend {
      background-color: #fff;
      border-radius: 3px;
      bottom: 30px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
      padding: 10px;
      position: absolute;
      right: 10px;
      z-index: 1;
    }

    .legend h4 {
      margin: 0 0 10px;
    }

    .legend div span {
      border-radius: 50%;
      display: inline-block;
      height: 10px;
      margin-right: 5px;
      width: 10px;
    }
  </style>
</head>

<body>

  <div id='map'></div>
  <div id='county-legend' class='legend'>
    <h4>Median Incomes, With Children (2016)</h4>
    <div><span style='background-color: #0571b0'></span>$150,000 +</div>
    <div><span style='background-color: #92c5de'></span>$110,000 - $149,000</div>
    <div><span style='background-color: #f7f7f7'></span>$90,000 - $110,000</div>
    <div><span style='background-color: #f4a582'></span>$60,000 - $89,999</div>
    <div><span style='background-color: #ca0020'></span>$0 - $59,999</div>
  </div>
  <script>
    mapboxgl.accessToken = "<Enter your token here>";

    const loadLayer = (data, map) => {
      map.on("load", () => {
        map.addLayer(
          {
            id: "victoria-stats",
            type: "fill-extrusion",
            source: {
              type: "geojson",
              data
            },
            layout: {},
            paint: {
              "fill-extrusion-color": [
                "interpolate",
                ["linear"],
                ["get", "total"],
                0,
                "#ca0020",
                60000,
                "#f4a582",
                90000,
                "#f7f7f7",
                110000,
                "#92c5de",
                150000,
                "#0571b0"
              ],
              "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["get", "total"],
                0,
                50,
                60000,
                300,
                110000,
                800,
                150000,
                2500
              ]
            }
          },
          "waterway-label"
        );
      });
    };

    const maxBounds = [
      [-124.2, 48.0483], // Southwest coordinates
      [-122.6199, 48.927281] // Northeast coordinates
    ];

    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v9",
      center: [-123.3942418, 48.4662302],
      zoom: 9.5,
      pitch: 20,
      maxBounds
    });

    axios
      .get(
        "https://s3.amazonaws.com/cdn.brianbancroft.io/assets/sample-map-data/income-with-children.geojson"
      )
      .then(response => {
        loadLayer(response.data, map);
      })
      .catch(console.error);
  </script>
</body>

</html>
```
