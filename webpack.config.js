module.exports = {
    devtool: 'inline-source-map',
    entry: './src/app.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'build/app.js',
      publicPath: '/public'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test:/\.(s*)css$/,
          use:['style-loader','css-loader', 'sass-loader']
        }
      ]
    }
  }