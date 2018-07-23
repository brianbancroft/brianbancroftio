import React from 'react'
import { select, geoPath, transition, timer, geoOrthographic, json } from 'd3'
import axios from 'axios'
const topojson = require('topojson')

export default class Globe extends React.Component {
  componentDidMount() {
    this._createD3Globe()
  }

  render() {
    return (
      <div
        id="globe"
        ref="globe"
        style={{
          position: 'fixed',
          top: '40px',
          zIndex: -100,
        }}
      />
    )
  }

  _createD3Globe() {
    const lat = 49.6966732
    const lng = -124.9420304
    const size = 600
    const time = Date.now()
    const rotate = [0, 0]
    const velocity = [0.0005, -0]

    const projection = geoOrthographic()
      .scale(size / 2)
      .translate([size / 2, size / 2])
      .clipAngle(90)
      .rotate([-lng, -lat])

    const jsonFileUri =
      'https://cdn.brianbancroft.io/assets/brianbancroftio-json/world.json'

    axios.get(jsonFileUri).then(response => {
      const land = topojson.feature(response.data, response.data.objects.land)
      const svg = select(this.refs.globe).append('svg')
      svg
        .attr('width', size)
        .attr('height', size)
        .attr('fill', '#efefef')
        .attr('fill-opacity', 0.6)
      const path = geoPath().projection(projection)
      svg
        .append('path')
        .datum(land)
        .attr('d', path)

      timer(() => {
        var dt = Date.now() - time
        projection.rotate([
          rotate[0] + velocity[0] * dt,
          rotate[1] + velocity[1] * dt,
        ])
        svg.selectAll('path').attr('d', path)
      })
    })
  }
}