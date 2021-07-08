const Sequelize = require('sequelize');
const config = new Sequelize('robogarden_app',"New","",{dialect: 'mysql'});

module.exports = config;