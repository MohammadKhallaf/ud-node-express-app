// const express = require("express");
// const { body } = require("express-validator");

// const authController = require("../controllers/auth");
// const User = require("../models/user");
import express from "express";
import { body } from "express-validator";

import authController from "../controllers/auth.js";
import User from "../models/user.js";

const router = express.Router();

router.post(
  "/add-user",
  [
    body("username")
      .trim()
      .isAlpha()
      .custom(async (value) => {
        const user = User.findOne({ where: { username: value } });
        if (user) throw new Error("This username is already exists");
      }),
  ],
  authController.createUser
);
router.post("/add-role", authController.createRole);

export default router;
