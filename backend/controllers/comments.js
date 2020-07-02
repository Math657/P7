const article = require('../models/article')
const user = require('../models/user')
const comment = require('../models/comment')

exports.getAllComments = (req, res) => {
    article.findOne({ where : {title: req.params.title}})
    .then(articleFound => {
        comment.findAll({
            where: {
                article_id: articleFound.article_id
            },
            order: [
                ['article_id', 'DESC']
            ]
        })
        .then((comment) => res.status(200).json({comment}))
        .catch((error) => res.status(503).json({error}))
    })
    .catch(error => res.status(500).json({error}))
}

exports.createComment = (req, res) => {
    article.findOne({ where : {title: req.params.title}})
    .then(article => {
        comment.create({
            article_id: article.article_id,
            author_id: req.body.userID,
            content: req.body.content,
            createdAt: Date.now()})
        .then((comment) => res.status(200).json({comment}))
        .catch((error) => res.status(503).json({error}))
    })
    .catch((error) => res.status(502).json({error}))
}