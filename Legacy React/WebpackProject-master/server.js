const express = require("express");
//the webpackMiddleware only serves to intercept incoming requests and hand it off to Webpack
const webpackMiddleware = require("webpack-dev-middleware");
//webpack exists to compile all of our application assets
const webpack = require("webpack");
//webpackConfig is what instructs webpack on how to run correctly.
const webpackConfig = require("./webpack.config.js");

const app = express();
// apply the webpack middleware
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(3050, () => console.log("Listening"));
