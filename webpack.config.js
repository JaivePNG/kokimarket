module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{ test: /\.css$/, loader: "style-loader!css-loader" }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map'
}
