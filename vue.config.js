/*
 * @Author: your name
 * @Date: 2021-07-02 17:08:46
 * @LastEditTime: 2021-07-03 15:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\vue.config.js
 */
module.exports = {
	css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      postcss: {} // 这里的选项会传递给 postcss-loader
    }, // css预设器配置项
    requireModuleExtension:true // 启用 CSS modules for all css / pre-processor files.
  },
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		}
	}
}