module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  }
}
