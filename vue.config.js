module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'PETPET'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pet-service/'
    : '/'
}
