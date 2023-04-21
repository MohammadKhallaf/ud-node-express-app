const Sequelize = require("sequelize");
const sequelize = require("../utils/db");
const Role = require("./role");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Role,
      key: "id",
    },
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    set(value) {
      const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (emailRegex.test(value)) return value;
      else throw new Error("Please enter a valid email!");
    },
  },
  address: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
});

module.exports = User;
