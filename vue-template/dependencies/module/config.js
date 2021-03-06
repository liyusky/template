const fs = require('fs')
const path = require('path')
const file = require('../components/file.js')

function setClassConfig () {
  let files = fs.readdirSync('../class', 'utf8')
  let config = {}
  files.forEach(item => {
    let itemArr = item.split('.')
    config[itemArr[0]] = item
  });

  file.create('../dist/class-config.js', 'module.exports = ' + JSON.stringify(config).replace(/"/g, '\'').replace(/:/g, ': ').replace(/,/g, ', ') + '\n')
  return require('../dist/class-config.js')
}

function initConfig () {
  let [componentsStr, classesStr] = ['', '']
  if (components.length) {
    components.forEach(item => {
      config.components[item] = false
      componentsStr += `\n\t\t'${item}': false,`
    })
  }
  if (classes.length) {
    classes.forEach(item => {
      config.class[firstChatUp(item.split('.')[0])] = false
      classesStr += `\n\t\t'${firstChatUp(item.split('.')[0])}': false,`
    });
  }
  configTemplate = formatConfig(false, false, classesStr, componentsStr, false, configTemplate)
}


let classes = setClassConfig()

module.exports = {
  classes,
}