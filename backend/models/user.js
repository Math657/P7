const Sequelize = require('sequelize')

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


module.exports = function(sequelize) {
    const userModel = sequelize.define("Users", {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allNull: false
        },
         nom: {
             type: Sequelize.STRING,
             allowNull: false
         },
         prenom: {
             type: Sequelize.STRING,
             allowNull: false
         }
    })
    return userModel;
}