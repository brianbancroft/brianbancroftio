---
title: Leaflet Choropleth Map
date: "2018-09-01T10:12:03.284Z"
headerImage: https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/leaflet-chropleth-icon.png
preview: https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/leaflet-chropleth-icon.png
---

![Header Image](https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/leaflet-chropleth-wide.jpg)

## A Bare-Bones Web-Choropleth using Leaflet

This is a quick 25-minute chropleth. You can [Visit the page here](http://leaflet-choropleth.bancroft.io/), and take the code yourself below.

This map has the following:

* A legend,
* Categorical styling,
* Highlighting
* Polygons using GeoJSON; and,
* Loading via an API call.

## The Code

```html
<!DOCTYPE html>
<html>

<head>

  <title>Basic Choropleth Example with API Call - Leaflet</title>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
    crossorigin="" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>

  <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js" integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
    crossorigin=""></script>


  <style>
    html,
    body {
      height: 100%;
      margin: 0;
    }

    #map {
      width: 600px;
      height: 400px;
    }
  </style>

  <style>
    #map {
      width: 100vw;
      height: 100vw;
    }

    .info {
      padding: 6px 8px;
      font: 14px/16px Arial, Helvetica, sans-serif;
      background: white;
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    .info h4 {
      margin: 0 0 5px;
      color: #777;
    }

    .legend {
      text-align: left;
      line-height: 18px;
      color: #555;
    }

    .legend i {
      width: 18px;
      height: 18px;
      float: left;
      margin-right: 8px;
      opacity: 0.7;
    }
  </style>
</head>

<body>

  <div id='map'></div>
  <script type="text/javascript">
  </script>
  <script>
  const accessToken = '<YOUR TOKEN HERE>'
  const map = L.map("map").setView([48.3062302, -123.3942418], 10);
    L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`,
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox.light"
      }
    ).addTo(map);

    // control that shows state info on hover
    const info = L.control();

    info.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    info.update = function (props) {
      this._div.innerHTML =
        "<h4>Average Household Income</h4>" + (props ? "$" + props.total : "Hover over a census tract");
    };

    info.addTo(map);

    const getColor = (d) => {
      let color;

      if (d > 150000) {
        color = "#0571b0";
      } else if (d > 110000) {
        color = "#92c5de";
      } else if (d > 90000) {
        color = "#f7e8f9";
      } else if (d > 60000) {
        color = "#f4a582";
      } else {
        color = "#ca0020";
      }
      return color;
    }

    const style = feature => ({
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.total)
    })

    const highlightFeature = (e) => {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      info.update(layer.feature.properties);
    }

    let geojson;

    const resetHighlight = (e) => {
      geojson.resetStyle(e.target);
      info.update();
    }

    const zoomToFeature = (e) => {
      map.fitBounds(e.target.getBounds());
    }

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    geojson = L.geoJson(null, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);

    map.attributionControl.addAttribution(
      'Population data &copy; <a href="https://www.statcan.gc.ca/eng/start">Statistics Canada</a>'
    );

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
      const div = L.DomUtil.create("div", "info legend"),
        grades = [0, 60000, 90000, 110000, 150000],
        labels = [],
        from,
        to;

      for (const i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' +
          getColor(from + 1) +
          '"></i> $' +
          from +
          (to ? "&ndash; $" + to : "+")
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);

    axios
      .get(
        "https://s3.amazonaws.com/cdn.brianbancroft.io/assets/sample-map-data/income-with-children.geojson"
      )
      .then(response => {
        geojson.addData(response.data);
      })
      .catch(console.error);
  </script>
</body>

</html>
```
