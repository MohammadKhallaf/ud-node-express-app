// const { validationResult, matchedData } = require("express-validator");
// const Role = require("../models/role");
// const User = require("../models/user");
import { validationResult, matchedData } from "express-validator";
import Role from "../models/role.js";
import User from "../models/user.js";

const createUser = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log(result.errors);
    return res.send({ errors: result.array() });
  }
  const data = matchedData(req);
  User.create({
    ...data,
  })
    .then((result) => {
      // console.log(res);
      res.status(201);
      res.send(result);
    })
    .catch((err) => {
      // console.log(err);
      res.status(409);
      res.send(err);
    });
};

const createRole = (req, res, next) => {
  Role.create({
    name: req.body.name.toLowerCase(),
  })
    .then((result) => {
      console.log(res);
      res.status(201);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(409);
      res.send(err);
    });
};

export default {
  createRole,
  createUser,
};
