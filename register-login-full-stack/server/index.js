const express = require("express");
const app = express();
// parse all req.body
const bodyParser = require("body-parser");
// parse all cookies
const cookieParser = require("cookie-parser");
// creates and maintains session
const session = require("express-session");

const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const mysql = require("mysql");
//due to security issue using mysql2
const mysql = require("mysql2");
// middleware
// make changes when we work with session
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// using middleware
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    // name of cookie
    key: "userId",
    // secret name
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysqlroot",
  database: "cruddatabase",
});
// Check if user is logged in
app.get("/checkUserLoggedIn", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
app.get("/logout", (req, res) => {
  console.log("req.cookies", req.cookies);
  console.log("req.cookies[userId]", req.cookies["userId"]);
  res.cookie("userId", "none", {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true,
  });
  res.send({ success: true, message: "User logged out successfully" });
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
            //   create a session with the data we get from db
            req.session.user = result;
            console.log("req.session.user", req.session.user);
            // send to frontend
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
