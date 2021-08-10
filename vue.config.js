// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
    },
  },
  // 关闭eslint语法检查
  lintOnSave: false
}