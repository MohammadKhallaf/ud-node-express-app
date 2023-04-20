const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();

router.get("/list", (req, res, next) => {
  res.json({ id: uuid(), a: "d" }).statusCode(200);
  res.send();
});

module.exports = router; // export here and require in the app file
