// root file
const express = require("express");
// const http = require("http"); // to launch the server // replaced with express
// const bodyParser = require("body-parser"); # deprecated

const app = express(); // creates an express-app // request handler

const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");

/* first define the gloabl used middlewares */
app.use(express.json());

app.use("/admin", adminRoutes); // adding path in first to filter the requests that will be sent to that router

app.use((req, res, next) => {
  // middleware declaration
  console.log("Inside Middleware");
  // res.send("<h1>Hi</h1>"); // you cannot use both send() and next() at the same time
  next(); // continue the journey to the next step ... otherwise returns the response
});

// catch all request
app.use("/", errorController.get404);

// const server = http.createServer(app);
app.listen(3000); // replaces http.createServer(app);

/* general notes */

// the request is handled in order from top to bottom
// app.use(bodyParser.urlencoded()); // deprecated and replaced with express.json
