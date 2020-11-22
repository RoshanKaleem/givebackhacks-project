const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createContext, removeContext } = require("./context");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

//middlewares
app.use(express.json()); // parse form data clients
app.use(express.urlencoded({ extended: false }));

// app page
app.post(`/scan`, (req, res) => {
  console.log("reached server yeah pep -->", req.body.uri);
  console.log(req.body);
  console.log("after req.body");
  let url = req.body.uri; //"http://www.itsecgames.com";

  createContext(req, res, "Default", url);
});

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}/ ...`);
});
