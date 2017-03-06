# trailpack-webserver


## Note: Deprecated as of v3. See [trailsjs/trailpack/server.js](https://github.com/trailsjs/trailpack/blob/master/server.js).

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Parent to the Web Server Trailpacks (hapi, koa, express4, etc).

## Usage
Web Server Trailpacks should extend this Trailpack. For example, [trailpack-hapi](https://github.com/trailsjs/trailpack-hapi)
is implemented thus:

```js
const WebServerTrailpack = require('trailpack-webserver')
class HapiTrailpack extends WebServerTrailpack {
  // ...
}
```

## API

#### `getOptionsFromQuery(query)`

Extract non-criteria options from the query object.

#### `getCriteriaFromQuery(query)`

Extract only the criteria from the query object.

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/trailsjs/trailpack-webserver/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-webserver.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-webserver
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-webserver/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-webserver
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-webserver.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-webserver
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-webserver.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-webserver
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

