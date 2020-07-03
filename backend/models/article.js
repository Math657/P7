const Sequelize = require('sequelize')
const db = require('../config/database')

const article = db.define("articles", {
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
        
    }
},  {
    freezeTableName: true,
    timestamps: false
})

module.exports = article