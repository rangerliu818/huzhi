import path from 'path'
module.exports = {
  base: './',
  // 导入别名   
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    // '/@/': path.resolve(__dirname, './src/views'),
    '/@components/': path.resolve(__dirname, './src/components'),
    // '/@utils/': path.resolve(__dirname, './src/utils'),
  },
  proxy: {
    '/api': {
      target: 'https://www.zhihu.com/api',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}