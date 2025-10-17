// entry -> output
const path = require("path");
// __dirname contains path of our current location -- check the path by running the command >node webpack.config.js
// get the path from node to concatenate path
//console.log(path.join(__dirname, "public"));

//module.exports exposes the object to another file
module.exports = {
  // entry point
  entry: "./src/app.js",
  // output
  output: {
    // absolute path on our machine where we want to output the webpack file
    path: path.join(__dirname, "public"),
    //filename to be bundled
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // loader- what loader we are using
        loader: "babel-loader",
        //what files we want to run this loader on -(files that end in .js)
        //babel will run through only the files which match the test criteria
        //check if the file is ending in .js
        test: /\.js$/,
        //exclude files
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    //This tells the dev server where it can find our public files.
    contentBase: path.join(__dirname, "public"),
  },
};
