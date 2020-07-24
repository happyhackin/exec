module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: `index.js`,
    library: `@happyhackin/exec`,
    libraryTarget: `commonjs2`,
  },
  externals: ['child_process'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

}
