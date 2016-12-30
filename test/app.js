'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
const WebServerTrailpack = require('..')

const TestPack = class TestPack extends WebServerTrailpack {
  constructor (app) {
    super(app, {
      pkg: {
        name: 'trailpack-webservertest'
      }
    })
  }
}

module.exports = _.defaultsDeep({
  pkg: {
    name: 'webserver-trailpack-test'
  },
  config: {
    main: {
      packs: [
        TestPack
      ]
    }
  }
}, smokesignals.FailsafeConfig)

