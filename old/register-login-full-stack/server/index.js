const express = require("express");
const app = express();
// parse all req.body
const bodyParser = require("body-parser");
// parse all cookies
const cookieParser = require("cookie-parser");
// creates and maintains session
const session = require("express-session");
// JWT
const jwt = require("jsonwebtoken");

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
// Verify if the user is authorized and sends a JWT token in client side api request
const verifyJWT = (req, res, next) => {
  // get jwt token from headers
  const token = req.headers["x-access-token"];
  console.log("token", token);
  if (!token) {
    res.send("NO JWT TOKEN, Please login using credentials");
  } else {
    // use the same secret key used to create the token
    jwt.verify(token, "jwtSecret", (err, decodedToken) => {
      console.log("decodedToken", decodedToken);
      if (err) {
        console.log("err", err);
        res.json({ auth: false, message: "You Did not authenticate" });
      } else {
        req.userId = decodedToken.id;
        next();
      }
    });
  }
};
// Check if user is Authenticated (ie:he sends a json token to make a request)
app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.json({
    auth: true,
    message: "You are Authenticated to make the request",
  });
});

// Check if user is logged in
// Pass the JWT token in headers in client side
// pass the middleware before request
app.get("/checkUserLoggedIn", verifyJWT, (req, res) => {
  if (req.session.user) {
    res.send({ auth: true, user: req.session.user });
  } else {
    res.send({ auth: false });
  }
});
// Logout the User
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
            // get the id from the response of mysql db for making jsonweb token
            const id = result[0].id;
            // NOTE:jwtSecret must be in .env file
            const token = jwt.sign({ id }, "jwtSecret", {
              expiresIn: 300,
            });
            //   create a session with the data we get from db
            req.session.user = result;
            console.log("req.session.user", req.session.user);
            // send to frontend
            // send the response with jsonwebtoken
            res.json({ auth: true, token: token, result: result });
          } else {
            res.json({
              auth: false,
              message: "Wrong username/password combination",
            });
          }
        }
      );
    } else {
      //username is not present in db
      res.json({ auth: false, message: "No user exists" });
    }
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
