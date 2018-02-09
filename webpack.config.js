const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OfflinePlugin = require('offline-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: {
    app: './src/client/App.js',
    vendor: ['react', 'react-router-dom'],
  },
  output: {
    path: path.resolve('public'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/chunk-[name].[hash].js',
    publicPath: ASSET_PATH
  },
  resolve: {
    extensions: [' ', '.jsx', '.scss', '.js', '.json', '.css'],
    modules: [
      path.resolve(__dirname + '/src/client'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-2'],
        },
      },
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]--[local]--[hash:base64:8]'
              }
            },
            'postcss-loader',
            'sass-loader',
          ]
        })
      },
    ],
  },
  plugins: [
    // new OfflinePlugin({
    //   safeToUseOptionalCaches: true,
    //   caches: 'all',
    //   ServiceWorker: {
    //     events: true
    //   },
    //   AppCache: {
    //     events: true
    //   },
    //   externals: [
    //     'index.html',
    //   ]
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'css/[name]-[id]-[contenthash].css',
    }),
    new CleanObsoleteChunks({
      // Write logs to console.
      // Default: true
      verbose: true,

      // Clean obsolete chunks of webpack child compilations.
      // Default: false
      deep: true
    }),
    // used to split out our sepcified vendor script
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'js/[name].[hash].js',
    }),

    /**
    * HtmlWebpackPlugin will make sure out JavaScript files are being called
    * from within our index.html
    */
    new SWPrecacheWebpackPlugin({
      filename: 'my-project-service-worker.js',
      cacheId: 'CoffeeHub_3',
      mergeStaticsConfig: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/client/index.html'),
      filename: 'index.html',
      chunks: ['app', 'vendor'],
      publicPath: '/',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyURLs: true,
      },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      minRatio: 0
    }),
  ]
}