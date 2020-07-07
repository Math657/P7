const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const articlesCtrl = require('../controllers/articles')

router.get('/home', auth, articlesCtrl.getAllArticles)
router.get('/home/:title', auth, articlesCtrl.getOneArticle)
router.get('/userPosts/:id', auth, articlesCtrl.getUserArticles)
router.post('/submitArticle/:id', auth, articlesCtrl.createArticle)
router.delete('/deleteArticle/:title', auth, articlesCtrl.deleteOneArticle)

module.exports = router