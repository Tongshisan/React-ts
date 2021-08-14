/*
 * @Author: your name
 * @Date: 2021-06-27 16:28:06
 * @LastEditTime: 2021-06-27 16:30:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/plugins/HelloAsyncPlugin.js
 */
function HelloAsyncPlugin() {}

HelloAsyncPlugin.prototype.apply = function(compiler){
  compiler.plugin('emit', function(compilation, calback){
    setTimeout(() => {
      console.log('异步 plugin')
      calback()
    }, 3000)
  })
}

module.exports = HelloAsyncPlugin;
