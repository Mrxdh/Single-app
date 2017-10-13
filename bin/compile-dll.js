import fs from 'fs-extra'
import _debug from 'debug'
import webpackCompiler from '../build/webpack-compiler'
import webpackConfig from '../build/webpack-dll.config'

const debug = _debug('app:bin:compile')

;(async function () {
  try {
    debug('Run dll compiler')
    const stats = await webpackCompiler(webpackConfig)
    if (stats.warnings.length) {
      debug('Config set to fail on warning, exiting with status code "1".')
      process.exit(1)
    }
  } catch (e) {
    debug('Compiler encountered an error.', e)
    process.exit(1)
  }
})()
