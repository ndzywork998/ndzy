const path = require('path');
const {
  override,
  addLessLoader, // 所有的 loader 在这里重构,
  addWebpackPlugin, // 所有的插件重写
  addWebpackAlias, // 添加别名
} = require('customize-cra');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  addWebpackPlugin(
    new ProgressBarPlugin(), // 项目启动构建进度
    new HardSourceWebpackPlugin(), // 打包缓存，优化性能
  ),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'), // 路径重定向 @ 代替 别名 可增加多个
  }),
  (config, env) => {
    if (env === 'production') {
      config.devtool = false; // 如果是成产环境，工具不启动
    }

    return config;
  },
);
