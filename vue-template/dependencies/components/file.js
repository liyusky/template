const fs = require('fs')
module.exports = {
  // 创建 文件
  create: function (dir, content, refresh) {
    let result = fs.writeFileSync(dir, content)
    let refreshStr = '创建'
    if (refresh) refreshStr = '更新'
    let logStr = `${dir} ${refreshStr}成功`
    if (result) {
      logStr = `${dir} ${refreshStr}失败 ===== ${result}`
    }
  }
}