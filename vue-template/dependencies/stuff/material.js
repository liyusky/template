const fs = require('fs')
let classes = fs.readdirSync('./src/class', 'utf8')
let components = fs.readdirSync('./src/components', 'utf8')
module.exports = {
  classes,
  components
}