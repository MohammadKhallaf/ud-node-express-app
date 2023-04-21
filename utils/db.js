// const mysql = require("mysql2"); // is integrated within sequelize
const Sequelize = require("sequelize");

// close the connect after the query is done
// instead of mush operations of open-query-close -> use a pool
const dbConfig = {
  host: "localhost",
  user: "root",
  database: "ud-node-course",
  password: process.env.DB_PASSWORD,
};

// const pool = mysql.createPool(dbConfig); // old method of handling SQL manually

const sequelize = new Sequelize(
  "ud-node-course",
  "root",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// module.exports = pool.promise();
module.exports = sequelize;
