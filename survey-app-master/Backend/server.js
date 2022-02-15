const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const app = express();

const ALL_SURVEYS = [
  { id: "cg1", text: "test-Training Feedback",
  dropdownVal:[
    {  label: "self-paced modules",value:"spm"  },
    {  label: "classroom modules",value:"cm"  },
  ]},
  { id: "cg2", text: "External COntent Rating",
  dropdownVal:[
    {  label: "classroom modules",value:"cm"  },
  ] },
  { id: "cg3", text: "HTrainer Effectiveness",
  dropdownVal:[{  label: "journeys",value:"js"  },],
},
] 
// not a database, just some in-memory storage for now

//app.use(bodyParser.json());--deprecated
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/surveys", (req, res, next) => {
    res.status(200).json({ surveys: ALL_SURVEYS });
  });
app.listen(5000); // start Node + Express server on port 5000
