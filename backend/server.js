const dotenv = require("dotenv").config();
const exphbs = require("express-handlebars");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { createContext, removeContext } = require("./controller/context");
//const { profileEnd } = require("console");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

//middlewares
app.use(express.json()); // parse form data clients
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'views')));
app.engine('handlebars',exphbs({defaultLayout:'base'}));
app.set('view engine','handlebars');

// app page
app.post(`/scan`, (req, res) => {
  console.log("reached server yeah pep -->", req.body.uri);
  console.log(req.body);
  console.log("after req.body");
  let url = req.body.uri; //"http://www.itsecgames.com";

  createContext(req, res, "Default", url);
});

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}/ ...`);
});
