const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite', // Change this to your desired database (mysql, postgres, etc.)
  storage: 'path/to/database.sqlite', // Specify your database file path
  logging: false, // Set to true if you want to see SQL queries in console
});

module.exports = sequelize;