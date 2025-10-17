const express = require("express");

const app = express();
// routes example
app.get("/hello", (req, res) => {
  res.send({
    hi: "there",
  });
});

// all routes must be specified above
// development environment
if (process.env.NODE_ENV !== "production") {
  //the webpackMiddleware only serves to intercept incoming requests and hand it off to Webpack
  const webpackMiddleware = require("webpack-dev-middleware");
  //webpack exists to compile all of our application assets
  const webpack = require("webpack");
  //webpackConfig is what instructs webpack on how to run correctly.
  const webpackConfig = require("./webpack.config.js");
  // apply the webpack middleware only in development
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // production environment
  //that it should make everything inside of the dist directory freely available for use, to anyone who asks for it.
  app.use(express.static("dist"));
  //if anyone makes a get request to any route on our server,go ahead and send them back the index.html file.
  //This statement right here is used specifically for compatibility with React Router specifically with the browser history module.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
}
// run a port dynamically or use fallback port
app.listen(process.env.PORT || 3050, () => console.log("Listening"));
