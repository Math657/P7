const article = require('../models/article')
const user = require('../models/user')
const comment = require('../models/comment')

exports.createComment = (req, res) => {
    user.findOne({ where: {id: req.params.id }})
    .then(userFound => {
        article.findOne({ where : {title: req.params.title }})
        .then(articleFound => {
            comment.createOne({
                article_id: articleFound.article_id,
                author_id: userFound.id,
                content: req.body.content,
                createdAt: Date.now()
            })
            .then(() => res.status(201).json({message: 'Commentaire soumis!'}))
            .catch(error => res.status(500).json({error}))
        })
        .catch(error => res.status(503).json({error}))
    })
    .catch(error => res.status(503).json({error}))
}

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