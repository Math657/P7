const Sequelize = require('sequelize')

module.exports = new Sequelize('groupomania', 'admin', 'admin', {
    host: 'localhost',
    dialect:  'mysql'
  })