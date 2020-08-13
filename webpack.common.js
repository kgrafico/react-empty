const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            },
            {
              test: /\.(eot|otf|ttf|woff|woff2)$/,
              loader: require.resolve("file-loader"),
                options: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};