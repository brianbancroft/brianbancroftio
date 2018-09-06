import axios from 'axios'
const topojson = require('topojson')
import { select, geoPath, timer, geoOrthographic } from 'd3'

import { globeDefaults } from '../constants'

const { lat, lng, size, time, rotate, velocity } = globeDefaults

const projection = geoOrthographic()
  .scale(size / 2)
  .translate([size / 2, size / 2])
  .clipAngle(90)
  .rotate([-lng, -lat])

const jsonFileUri =
  'https://cdn.brianbancroft.io/assets/brianbancroftio-json/world.json'

export default ({ refs }) => {
  axios.get(jsonFileUri).then(({ data }) => {
    const land = topojson.feature(data, data.objects.land)
    const svg = select(refs.globe).append('svg')

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
      let dt = Date.now() - time
      projection.rotate([
        rotate[0] + velocity[0] * dt,
        rotate[1] + velocity[1] * dt,
      ])
      svg.selectAll('path').attr('d', path)
    })
  })
}
