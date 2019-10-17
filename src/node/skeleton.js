
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const path = require('path');

new SkeletonWebpackPlugin({
  webpackConfig: {
    entry: {
      main: path.join(__dirname, "./src/skeleton")
    }
  },
  router: {
      mode: 'history',
      routes: [
          {
              path: '/info',
              skeletonId: 'skeleton1'
          },
      ]
  },
  minimize: true,
  quiet: true
});