'use strict'

const _ = require('lodash')
const Trailpack = require('trailpack')
const footprintOptions = [
  'populate',
  'limit',
  'offset'
]

/**
 * Web Server Trailpack
 *
 * Web Servers should inherit from this Trailpack in order to provide consistent
 * API for all web servers.
 */
module.exports = class WebServerTrailpack extends Trailpack {

  /**
   * Extract options from request query and return the object subset.
   */
  getOptionsFromQuery (query) {
    return _.pick(query, footprintOptions)
  }

  /**
   * Extract the criteria from the query
   */
  getCriteriaFromQuery (query) {
    return _.omit(query, footprintOptions)
  }

  constructor (app, config) {
    super(app, _.merge({
      pkg: require('./package')
    }, config))
  }
}
