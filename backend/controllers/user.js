const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const user = require('../models/user')

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
    user.create({ 
        email: req.body.email,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        password: hash,
        status: "Actif"
    })})
    .then(() => res.status(201).json({message: 'Utilisateur crée!'}))
    .catch(error => res.status(500).json({error}))     
}

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
                    res.status(200).json({
                        token: jwt.sign(
                            {userId: user.id},
                            "RANDOM_TOKEN_SECRET",
                            {expiresIn: '24h'}
                        )
                    })
                }
            })
            .catch(error => res.status(500).json({error}))
        }
    })
    .catch(error => res.status(500).json({error}))
}