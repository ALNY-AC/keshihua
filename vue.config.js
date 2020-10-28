module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ?'/admin/'
    :'/',
    devServer: {
      // host: '',
      disableHostCheck: true,
      proxy: {
        '/avue': {
          target: 'https://www.yuque.com',
          changeOrigin: true,
          pathRewrite: {
            // '^/avue': ''
          },
          
        }
      }
    }
}