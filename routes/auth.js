const express = require("express");

const authController = require("../controllers/auth");
const router = express.Router();

router.post("/add-user", authController.createUser);
router.post("/add-role", authController.createRole);

module.exports = router;
