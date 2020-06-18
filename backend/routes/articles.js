const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const articlesCtrl = require('../controllers/articles')

router.get('/home', auth, articlesCtrl.getAllArticles)

module.exports = router