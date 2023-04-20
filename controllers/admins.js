const { v4: uuid } = require("uuid");

exports.listAllAdmins = (req, res, next) => {
  res.json({ id: uuid(), a: "d" }).statusCode(200);
  res.send();
};
