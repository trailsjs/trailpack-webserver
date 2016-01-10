const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: 'webserver-trailpack-test'
  },
  config: {
    main: {
      packs: [
        smokesignals.Trailpack,
        require('../') // trailpack-webserver
      ]
    }
  }
}, smokesignals.FailsafeConfig)

