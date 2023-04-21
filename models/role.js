const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

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

module.exports = Role;
