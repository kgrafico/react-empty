const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    envName: "production"
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader, "css-loader"
            ]
        },
  ]
}
});