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

    it('should parse criteria from the query object', () => {
      const query = {
        foo: 'bar',
        boolTrue: 'true',
        boolFalse: 'false',
        nullOk: 'null',
        numberOk: '10',
        numberDecimalOk: '10.50',
        objectId: '580626c2f0f47500b486436b'
      }
      const criteria = pack.getCriteriaFromQuery(query)

      assert.equal(criteria.foo, 'bar')
      assert.equal(criteria.boolTrue, true)
      assert.equal(criteria.boolFalse, false)
      assert.equal(criteria.nullOk, null)
      assert.equal(criteria.numberOk, 10)
      assert.equal(criteria.numberDecimalOk, 10.50)
      assert.equal(criteria.objectId, '580626c2f0f47500b486436b')
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

    it('should parse non-criteria options from the query object', () => {
      const query = {
        foo: 'bar',
        populate: 'foo',
        limit: '100',
        offset: '0'
      }
      const options = pack.getOptionsFromQuery(query)

      assert(!options.foo)
      assert.equal(options.populate, 'foo')
      assert.equal(options.limit, 100)
      assert.equal(options.offset, 0)
    })
  })
})
