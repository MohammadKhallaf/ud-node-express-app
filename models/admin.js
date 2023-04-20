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
