const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
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
  //hash the password with saltRounds
  bcrypt.hash(passWord, saltRounds, (err, hash) => {
    // Store hash in your password DB.
    if (err) {
      console.log("err-/register", err);
    } else {
      const sqlInsert = "INSERT INTO users (username,password) VALUES  (?,?)";
      // pass the hashed variable
      db.query(sqlInsert, [userName, hash], (err, result) => {
        console.log("err", err);
        console.log("result", result);
        res.send("Inserted");
      });
    }
  });
});
// Login user
app.post("/login", (req, res) => {
  const userName = req.body.username;
  const passWord = req.body.password;
  //get the username
  const sqlSelect = "SELECT * FROM users where username=?";
  //   hash password using bcrypt
  db.query(sqlSelect, [userName], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    // check the sql query if it returns an empty array
    if (result.length > 0) {
      // check if combination is correct for password by comparing typed password with db hashed password
      bcrypt.compare(
        passWord,
        result[0].password,
        (error, passwordResponse) => {
          if (passwordResponse) {
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination" });
          }
        }
      );
    } else {
      //username is not present in db
      res.send({ message: "User does not exist" });
    }
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
