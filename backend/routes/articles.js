const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const articlesCtrl = require('../controllers/articles')

// router.get('/home', auth, articlesCtrl.getAllArticles)
router.get('/home', articlesCtrl.getAllArticles)
router.get('/home/:title', articlesCtrl.getOneArticle)
router.post('home/submitArticle', articlesCtrl.createArticle)

module.exports = router