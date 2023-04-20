const mysql = require("mysql2");

// close the connect after the query is done
// instead of mush operations of open-query-close -> use a pool
const dbConfig = {
  host: "localhost",
  user: "root",
  database: "ud-node-course",
  password: process.env.DB_PASSWORD,
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
