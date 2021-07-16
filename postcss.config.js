/*
 * @Author: your name
 * @Date: 2021-07-03 15:28:12
 * @LastEditTime: 2021-07-04 11:46:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\postcss.config.js
 */
module.exports = { 
  plugins: [
    require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']})// 自动添加css前缀
    ]
}