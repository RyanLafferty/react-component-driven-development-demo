const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.module.(s*)css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true
            }
          }, 
          'sass-loader'
        ]
      },
      {
        test:/\.(s*)css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              minimize: true
            }
          }, 
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            }
          },
          'file-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    'react': 'commonjs react' 
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './../analytics/report.html'
    })
  ]
};
