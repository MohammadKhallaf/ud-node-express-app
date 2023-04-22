// const Sequelize = require("sequelize");
// const sequelize = require("../utils/db");
import Sequelize from "sequelize";
import sequelize from "../utils/db.js";

const Admin = sequelize.define("admin", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  // user_id:Sequelize.}
});

/* old code
const { v4: uuid } = require("uuid");
const db = require("../utils/db");

const admins = [];

class Admin {
  constructor(t) {
    this.id = uuid();
    this.title = t;
  }

  save() {
    admins.push(this);
    console.log(admins);
  }

  static fetchAll() {
    // static => directly on the class itself

    return db.execute("SELECT * FROM  admins");
    // .then((val) => {
    //   return val[0];
    // });

    // return admins;
  }
}

module.exports = Admin;
*/
export default Admin;
