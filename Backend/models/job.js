const {
  DataTypes
} = require('sequelize');
const sequelize = require('../config/database.js'); // Assuming you have a file for Sequelize setup

const Job = sequelize.define('Job', {
    companyName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  managerName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  city: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  state: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  zip: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  salaryAmount: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  // Add more fields as per your requirement
});

module.exports = Job;  