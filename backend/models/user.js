const Sequelize = require('sequelize')
// const bcrypt = require("bcrypt")
const db = require('../config/database')

const user = db.define("Users", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
     status: {
         type: Sequelize.STRING,
         allowNull: false
     },
     type: {
         type: Sequelize.STRING,
         allowNull: false
     }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = user