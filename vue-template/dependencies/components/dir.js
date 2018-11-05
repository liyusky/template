const fs = require('fs')
let classes = fs.readdirSync('./src/class', 'utf8')
let module = fs.readdirSync('./src/module', 'utf8')
module.exports = {
  classes,
  module
}