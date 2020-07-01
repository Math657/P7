const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const user = require('../models/user')
require('dotenv').config()

exports.signup = (req, res) => {
    user.findOne({ where: { email: req.body.email } })
    .then(userExist => {
        if (userExist) {
            return res.status(401).json({message: 'Email déjà utilisé!'})
        }
        else {
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                user.create({ 
                    email: req.body.email,
                    lastname: req.body.lastname,
                    firstname: req.body.firstname,
                    password: hash,
                    status: "Actif"
                })
                .then(userCreated => {
                    let token = jwt.sign(
                        {userId: userCreated.id},
                        process.env.SECRET_KEY,
                        {expiresIn: '24h'})
      
                        res.cookie('token', token, { expires: new Date(Date.now() + 240 * 3600000) })
                        res.status(200).json({userId: userCreated.id})
                })
            }) 
            .catch(error => res.status(500).json({error})) 
        }  
    })
    .catch(error => res.status(500).json({error}))
   
}


// exports.signup = (req, res) => {
//     user.findOne({ where: { email: req.body.email } })
//     .then(userExist => {
//         if (userExist) {
//             return res.status(401).json({message: 'Email déjà utilisé!'})
//         }
//         else {
//             bcrypt.hash(req.body.password, 10)
//             .then(hash => {
//                 user.create({ 
//                     email: req.body.email,
//                     lastname: req.body.lastname,
//                     firstname: req.body.firstname,
//                     password: hash,
//                     status: "Actif"
//                 })
//                 .then(() => res.status(201).json({message: 'Utilisateur crée!'}))
//             }) 
//             .catch(error => res.status(500).json({error})) 
//         }
//     })
//     .catch(error => res.status(500).json({error}))
// }

exports.login = (req, res) => {
    user.findOne({ where: { email: req.body.email } })
    .then(user => {
        if (!user) {
            return res.status(401).json({message: 'Utilisateur non trouvé!'})
        }
        else {
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({message: "Mot de passe incorrect!"})
                }
                else { 
                let token = jwt.sign(
                    {userId: user.id},
                    process.env.SECRET_KEY,
                    {expiresIn: '24h'})
  
                    res.cookie('token', token, { expires: new Date(Date.now() + 240 * 3600000) })
                    res.status(200).json({userId: user.id})
                }
            })
            .catch(error => res.status(500).json({error}))
        }
    })
    .catch(error => res.status(500).json({error}))
}

exports.getOneUser = (req, res) => {
    user.findOne({ where: {id: req.params.id }})
    .then((user) => res.status(200).json({user}))
    .catch((error) => res.status(503).json({error}))
}

exports.deleteUser = (req, res) => {
    user.findOne({ where: {id: req.params.id }})
    .then(userFound => {
        user.update({ 
                     email: null,
                     password: '',
                     status: 'Deleted' },
                     { where: { id: userFound.id } })
        .then(() => res.status(201).json({message: 'Utilisateur supprimé!'}))
        .catch((error) => res.status(503).json({error}))
    })
    .catch((error) => res.status(503).json({error}))
}