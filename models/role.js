// const Sequelize = require("sequelize");
// const sequelize = require("../utils/db");
import Sequelize from "sequelize";
import sequelize from "../utils/db.js";

const Role = sequelize.define("role", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Role;
