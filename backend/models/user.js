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
    const userModel = sequelize.define("User", {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allNull: false
        } 
    })
    return userModel;
}