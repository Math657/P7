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
    //  createdAt: {
    //      type: Sequelize.DATE
    //  },
    //  updatedAt: {
    //      type: Sequelize.DATE
    //  }
}, {
    freezeTableName: true,
    timestamps: false
    // instanceMethods: {
    //     generateHash(password) {
    //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //     },
    //     validPassword(password) {
    //         return bcrypt.compare(password, this.password);
    //     }
    // },
})

module.exports = user

// const userModel = sequelize.define('user', {
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: Sequelize.STRING,
//         allNull: false
//     }
// })

// module.exports = Sequelize.model('User', userModel)


// module.exports = function(sequelize) {
//     const userModel = sequelize.define("users", {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         email: {
//             type: Sequelize.STRING,
//             allowNull: false,
//             unique: true
//         },
//         password: {
//             type: Sequelize.STRING,
//             allNull: false
//         },
//          lastname: {
//              type: Sequelize.STRING,
//              allowNull: false
//          },
//          firstname: {
//              type: Sequelize.STRING,
//              allowNull: false
//          },
//          status: {
//              type: Sequelize.STRING,
//              allowNull: false
//          }
//     }, {
//         freezeTableName: true,
//         instanceMethods: {
//             generateHash(password) {
//                 return bcrypt.hash(password, bcrypt.genSaltSync(8));
//             },
//             validPassword(password) {
//                 return bcrypt.compare(password, this.password);
//             }
//         }

//     })
//     return userModel;
// }