const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const articlesCtrl = require('../controllers/articles')

// router.get('/home', articlesCtrl.getAllArticles)
// router.get('/home/:title', articlesCtrl.getOneArticle)
// router.post('/submitArticle/:id', articlesCtrl.createArticle)
router.get('/home', auth, articlesCtrl.getAllArticles)
router.get('/home/:title', auth, articlesCtrl.getOneArticle)
router.post('/submitArticle/:id', auth, articlesCtrl.createArticle)

//router.delete('home/:title', articlesCtrl.deleteArticle)

module.exports = router