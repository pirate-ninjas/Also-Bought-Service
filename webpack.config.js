const CompressionPlugin = require('compression-webpack-plugin');

const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');

const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
              ['airbnb'],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new CompressionPlugin({
    test: /\.(js|jsx)$/,
    exclude: /(node_modules)/,
    algorithm: 'gzip',
  })],
  resolve: { extensions: ['.js', '.jsx'] },
  // mode: 'development',
  mode: 'production',
  watch: true,
};
