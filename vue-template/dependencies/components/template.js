const fs = require('fs')
module.exports = {
  vue: fs.readFileSync('../tempalte/vue.tempalte', 'utf8'),
  scss: fs.readFileSync('../tempalte/scss.tempalte', 'utf8'),
  js: fs.readFileSync('../tempalte/js.tempalte', 'utf8'),
  config: fs.readFileSync('../tempalte/config.tempalte', 'utf8'),
  router: fs.readFileSync('../tempalte/router.tempalte', 'utf8')
}
