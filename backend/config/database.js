const Sequelize = require('sequelize')

module.exports = new Sequelize('groupomania', 'admin', process.env.ADMIN_PASS, {
    host: 'localhost',
    dialect:  'mysql'
  })