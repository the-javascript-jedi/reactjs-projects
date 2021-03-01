const express = require("express");
const githubJobs = require("./data/githubJobs");
// cors middleware
const corsMiddleware = require("./corsMiddleware.js");
const app = express();
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.get("/api/githubJobs", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed

  //   res.send("cors problem fixed:)");
  res.json(githubJobs);
});
app.listen(5000, console.log("Server running on Port 5000"));
