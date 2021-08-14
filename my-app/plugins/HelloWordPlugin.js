const resolve = require("resolve")

/*
 * @Author: your name
 * @Date: 2021-06-27 15:56:24
 * @LastEditTime: 2021-06-27 16:27:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/plugins/HelloWordPlugin.ts
 */
function HelloWordPlugin(options) {
  console.log('plugin 函数体', options)
}

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

HelloWordPlugin.prototype.apply = function(compiler) {
  console.log('hello word plugins', compiler)
  compiler.plugin('done', function() {
    console.log('hello word!')
  })
}

module.exports = HelloWordPlugin;
