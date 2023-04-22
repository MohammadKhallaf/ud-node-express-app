// root file
// const express = require("express");
// const http = require("http"); // to launch the server // replaced with express
// const bodyParser = require("body-parser"); # deprecated

import "dotenv/config.js"; // this should be called first to enable reading from env files

import express from "express";
import { get404 } from "./controllers/error.js";
import Role from "./models/role.js";
import User from "./models/user.js";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import sequelize from "./utils/db.js";

const app = express(); // creates an express-app // request handler

// const errorController = require("./controllers/error");
// const sequelize = require("./utils/db");

// const adminRoutes = require("./routes/admin");
// const authRoutes = require("./routes/auth");
// const User = require("./models/user");
// const Role = require("./models/role");

/* first define the gloabl used middlewares */
app.use(express.json());

app.use("/admin", adminRoutes); // adding path in first to filter the requests that will be sent to that router
app.use("/auth", authRoutes);
app.use((req, res, next) => {
  // middleware declaration
  console.log("Inside Middleware");
  // res.send("<h1>Hi</h1>"); // you cannot use both send() and next() at the same time
  next(); // continue the journey to the next step ... otherwise returns the response
});

// catch all request
app.use(get404);

// Define the association between User and Role
User.belongsTo(Role, {
  foreignKey: "role_id",
  constraints: true,
  onDelete: "CASCADE",
});

// Role.hasMany(User, { foreignKey: "role_id" }); // optional as replacement to the previous statement

sequelize
  .sync({
    // force: true // forces the drop and override the DB //! don't do that on production
  }) // sync modals to databases
  .then((res) => {
    // console.log(res);
    app.listen(3000); // replaces http.createServer(app);
  })
  .catch((err) => console.log(err));

// const server = http.createServer(app);

/* general notes */

// the request is handled in order from top to bottom
// app.use(bodyParser.urlencoded()); // deprecated and replaced with express.json
