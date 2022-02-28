const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const mysql = require("mysql");
//due to security issue using mysql2
const mysql = require("mysql2");
// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysqlroot",
  database: "cruddatabase",
});

// Register a user
app.post("/register", (req, res) => {
  const userName = req.body.username;
  const passWord = req.body.password;
  const sqlInsert = "INSERT INTO users (username,password) VALUES  (?,?)";
  db.query(sqlInsert, [userName, passWord], (err, result) => {
    console.log("err", err);
    console.log("result", result);
    res.send("Inserted");
  });
});
// Login user
app.post("/login", (req, res) => {
  const userName = req.body.username;
  const passWord = req.body.password;
  const sqlSelect = "SELECT * FROM users where username=? AND password=?";
  db.query(sqlSelect, [userName, passWord], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    // check the sql query if it returns an empty array
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination" });
    }
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
