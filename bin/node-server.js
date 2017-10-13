var _debug = require('debug');
var Koa = require("koa")
var convert = require("koa-convert")
var historyApiFallback = require('koa-connect-history-api-fallback')
var serve = require('koa-static')
var staticCache = require('koa-static-cache')

const debug = _debug('app:server')
const app = new Koa()

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})))

// app.use(convert(serve('dist')))

app.use(convert(staticCache('build'), {
  maxAge: 30 * 24 * 60 * 60
}))

const port = process.env.PORT || 8510
const host = process.env.HOST || '127.0.0.1'

app.listen(port)
debug(`Server is now running at http://${host}:${port}.`)
