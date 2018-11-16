const _Template = require('../stuff/template.js')

function config(params) {
  params.classesStr = params.classesStr.substr(0, params.classesStr.length - 1) + '\n\t'
  params.componentsStr = params.componentsStr.substr(0, params.componentsStr.length - 1) + '\n\t'
  template = _Template.config
  if (!params.contentStr) params.contentStr = ''
  template = template.replace('SITE_CONTENT', params.contentStr)
  template = template.replace('SITE_ROUTER', params.router)
  template = template.replace('SITE_VUE', vuexStr)
  template = template.replace('SITE_CLASS', params.classesStr)
  template = template.replace('SITE_COMPONENTS', params.componentsStr)
  template = template.replace(/\t/g, '  ')
  return template
}

module.exports = {
  config,
}
