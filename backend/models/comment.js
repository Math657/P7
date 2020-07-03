const Sequelize = require('sequelize')
const db = require('../config/database')

const comment = db.define("comments", {
    article_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    author_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
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

module.exports = comment