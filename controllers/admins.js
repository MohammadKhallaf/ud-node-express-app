const { v4: uuid } = require("uuid");
const Admin = require("../models/admin");

exports.listAllAdmins = (req, res, next) => {
  Admin.fetchAll().then(([rows, metaData]) => {
    res.status(200);
    res.json(rows);
    res.send();
  });
};

exports.addAdmin = (req, res, next) => {
  console.log(req.body);
  const newAdmin = new Admin(req.body.title);
  newAdmin.save();
  res.redirect("/list");
  next();
};
