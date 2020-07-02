const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const commentsCtrl = require('../controllers/comments')

router.get('/comments/:title', auth, commentsCtrl.getAllComments)
router.post('/submitComment/:title', auth, commentsCtrl.createComment)

module.exports = router