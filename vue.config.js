const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  chainWebpack(config) {
		config.plugin('html').tap((args) => {
			args[0].title = 'AI工具箱';
			return args;
		})
	},
})
