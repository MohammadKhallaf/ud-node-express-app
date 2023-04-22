// const Admin = require("../models/admin");

import Admin from "../models/admin.js";

const listAllAdmins = (req, res, next) => {
  Admin.fetchAll().then(([rows, metaData]) => {
    res.status(200);
    res.json(rows);
    res.send();
  });
};

const addAdmin = (req, res, next) => {
  console.log(req.body);
  const newAdmin = new Admin(req.body.title);
  newAdmin.save();
  res.redirect("/list");
  next();
};

export default {
  addAdmin,
  listAllAdmins,
};
