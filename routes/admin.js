// const express = require("express");
// const adminsController = require("../controllers/admins");
import express from "express";
import adminsController from "../controllers/admins.js";

const router = express.Router();

router.get("/list", adminsController.listAllAdmins);
router.post("/add", adminsController.addAdmin);

export default router; // export here and require in the app file
