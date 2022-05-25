var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  target: "node",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"], //resolve all the modules other than index.ts
  },
  module: {
    rules: [
      {
        use: "swc-loader",
        test: /\.ts?$/,
      },
    ],
  },
};
