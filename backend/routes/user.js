const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const userCtrl = require('../controllers/user')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/profil/:id', auth, userCtrl.getOneUser)
router.delete('/profil/:id', auth, userCtrl.deleteUser)

module.exports = router