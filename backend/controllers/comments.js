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
                ['createdAt', 'DESC']
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
        user.findOne({where : {id: req.body.userID}})
        .then(user => {
            comment.create({
                article_id: article.article_id,
                author_id: req.body.userID,
                author_name: user.firstname + ' ' + user.lastname,
                content: req.body.content,
                createdAt: Date.now()})
            .then((comment) => res.status(200).json({comment}))
            .catch((error) => res.status(503).json({error}))
        })
        .catch((error) => res.status(503).json({error}))
    })
    .catch((error) => res.status(502).json({error}))
}

exports.deleteOneComment = (req, res) => {
    comment.destroy({ where : { comment_id: req.params.id }})
    .then(() => res.status(200).json({message: 'Commentaire supprimé!'}))
    .catch(error => res.status(503).json(error))
}