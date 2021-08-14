/*
 * @Author: your name
 * @Date: 2021-06-27 20:55:08
 * @LastEditTime: 2021-06-27 21:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/plugins/FileListPlugin.js
 */
function FileListPlugin() {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    let fileList = 'In this build: \n\n';

    // 便利所有编译过的资源
    // 对于每个文件, 都添加一行内容
    for (let filename in compilation.assets) {
      fileList += (`- ${filename}\n`)
    }

    for (let file in compilation) {
      fileList += (`- ${file}\n`)
    }

    // 将这个文件列表作为一个新的资源, 插入到 webpack 构建中
    compilation.assets['fileList.md'] = {
      source: function() {
        return fileList;
      },
      size: function() {
        return fileList.length;
      }
    }

    callback && callback();

  })
}

module.exports = FileListPlugin;
