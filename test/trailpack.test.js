'use strict'

const assert = require('assert')
const _ = require('lodash')
const WebServerTrailpack = require('../')
const Trailpack = require('trailpack')

describe('Web Server Trailpack', () => {
  let pack

  before(() => {
    pack = global.app.packs.webservertest
  })

  it('should load', () => {
    assert(pack)
  })
  it('should be an instance of Trailpack', () => {
    assert(pack instanceof Trailpack)
  })
  it('should be an instance of WebServerTrailpack', () => {
    assert(pack instanceof WebServerTrailpack)
  })

  describe('#getCriteriaFromQuery', () => {
    it('should extract criteria from the query object', () => {
      const query = {
        foo: 'bar',
        populate: 'foo',
        limit: 100,
        offset: 0
      }
      const criteria = pack.getCriteriaFromQuery(query)

      assert.equal(criteria.foo, 'bar')
      assert(!criteria.populate)
      assert(!criteria.limit)
      assert(!criteria.offset)
    })
  })

  describe('#getOptionsFromQuery', () => {
    it('should extract non-criteria options from the query object', () => {
      const query = {
        foo: 'bar',
        populate: 'foo',
        limit: 100,
        offset: 0
      }
      const options = pack.getOptionsFromQuery(query)

      assert(!options.foo)
      assert.equal(options.populate, 'foo')
      assert.equal(options.limit, 100)
      assert.equal(options.offset, 0)
    })
    it('should leave a query with no options untouched', () => {
      const query = {
        foo: 'bar'
      }
      const options = pack.getOptionsFromQuery(query)

      assert.equal(query.foo, 'bar')
      assert(_.isEmpty(options))
    })
  })
})
