const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: {
    main:  './src/index.ts',
    // firebase: './src/firebase/index.ts'
  },
  // optimization: {
  //   concatenateModules: false,
  // },
  module: {
    rules: [
      {
        test: /\.m?[jt]s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        minifyJS: true
      }
    }),
    new BundleAnalyzerPlugin()
  ],
  externals: {
    // Exclude all modules in node_modules from the bundle
    // This assumes your dependencies are available at runtime
    // via a global variable (e.g., 'React', 'lodash', etc.)
    'node_modules': 'commonjs2 node_modules',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 4000,
    allowedHosts: 'all',
  },
};
