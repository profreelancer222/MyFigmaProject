const {
  DataTypes
} = require('sequelize');
const sequelize = require('../config/database.js'); // Assuming you have a file for Sequelize setup

const User = sequelize.define('User', {
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Add more fields as per your requirement
});

module.exports = User;