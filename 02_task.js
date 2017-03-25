let fs = require('fs')
let path = require('path')
let _ = require('lodash')
let modifyObject = require('./lib/modifyObject.js')
let EnvWork = require('./lib/EnvWork')

let dir = path.resolve()
const file = '.env'

let work = new EnvWork(dir, file)
work.searchFileAndCreateObject(  obj => {
    if (obj) {
        console.log( modifyObject( obj ) )
    }
})
