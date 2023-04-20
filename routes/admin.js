const express = require("express");
const adminsController = require("../controllers/admins");

const router = express.Router();

router.get("/list", adminsController.listAllAdmins);
router.post("/add", adminsController.addAdmin);

module.exports = router; // export here and require in the app file
