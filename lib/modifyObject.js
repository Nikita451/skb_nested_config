let _ = require('lodash')

function  modifyObject(obj) {
    let newObj = {}
    _.forIn(obj, (value, key) => {
        _.set(newObj, key, value)
    })
    return newObj
}
module.exports = modifyObject
