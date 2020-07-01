const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const commentsCtrl = require('../controllers/comments')

router.post('/comment/:id', commentsCtrl.createComment)
router.get('/comments', commentsCtrl.getAllComments)
// router.get('/home/comments', auth, commentsCtrl.getAllComments)
// router.post('/home/comment', auth, commentsCtrl.createComment)

module.exports = router