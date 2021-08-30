var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// an array of strings where each string is the name of the library that we want to include in the separate vendor file.
const VENDOR_LIBS = [
  "react",
  "lodash",
  "redux",
  "react-redux",
  "react-dom",
  "faker",
  "react-input-range",
  "redux-form",
  "redux-thunk",
];
module.exports = {
  entry: {
    // produce bundle.js and called as bundle - starts inside index.js
    bundle: "./src/index.js",
    //vendor.js used from all the array of module dependencies
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, "dist"),
    //name is replaced from key from entry section
    //chunkhash is an unique string of characters.
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      // babel loader
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      // rule for handling css
      // css.loader allows Webpack to understand and read the contents of CSS files that are imported into our project structure. And then this style-loader takes all those CSS modules and sticks them into a style tag inside of our index.html
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
    ],
  },
  // plugins section
  // CommonsChunkPlugin-if there are copies or duplicates between the bundle.js and vendor.js, pull them out and add them to the vendor entry point
  // HtmlWebpackPlugn-it will manually add in a script tag for every JavaScript file we just added and then it will take - or it will output a new HTML document into our dist directory.
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
