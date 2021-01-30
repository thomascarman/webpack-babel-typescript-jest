var path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          //   transpileOnly: true,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
