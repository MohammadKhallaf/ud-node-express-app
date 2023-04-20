// root file

const http = require("http"); // to launch the server
const express = require("express");

const app = express(); // creates an express-app // request handler

app.use((req, res, next) => {
  // middleware declaration
  console.log("Inside Middleware");
  // res.send("<h1>Hi</h1>");
  next(); // continue the journey to the next step ... otherwise returns the response
});

// const server = http.createServer(app);

app.listen(3000); // replaces http.createServer(app);
