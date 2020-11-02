module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  chainWebpack: config => {
    config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
      options.transformAssetUrls = {
        'q-img': 'src'
      }
      return options
    })

    // Parse .pynbhtml files as raw text, so we can include them into pages.
    config.module.rule('raw').test(/\.pynbhtml$/).use('raw-loader').loader('raw-loader').end()
  }
}
