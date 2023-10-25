const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Danish777.',
  database: 'products_app',
};

const dbConnection =
  mysql.createPool(dbConfig);

module.exports = dbConnection.promise();