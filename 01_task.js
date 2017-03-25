/*
  Необходимо написать функции, способную скомпоновать данные из линейного key-value объекта во вложенный.
 */
let modifyObject = require('./lib/modifyObject.js')

let obj = {
    PORT: '8000',
    HOSTNAME: 'localhost',
    'middlewares.accessLogger': 1,
    'middlewares.bodyParser.json': 1,
    'middlewares.bodyParser.urlencoded.limit': '50mb',
    'middlewares.bodyParser.urlencoded.extended': 1,
    'middlewares.reqData': 1,
    'middlewares.cookieParser': 1,
    'middlewares.cors': 0,
}

console.log(  modifyObject(obj )  )
