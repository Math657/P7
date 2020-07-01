const article = require('../models/article')
const user = require('../models/user')

exports.getAllArticles = (req, res) => {
    article.findAll({order: [
        ['article_id', 'DESC']
      ]})
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}

exports.getOneArticle = (req, res) => {
    article.findOne({ where: {title: req.params.title}})
    .then((article) => res.status(200).json({article}))
    .catch((error) => res.status(503).json({error}))
}

exports.createArticle = (req, res) => {
    article.findOne({ where: {title: req.body.title} })
    .then(articleExist => {
        if (articleExist) {
            return res.status(401).json({message: 'Un article avec ce titre existe déjà!'})
        }
        else {
            user.findOne({ where: {id: req.params.id}})
            .then(user => 
                article.create({
                    title: req.body.title,
                    content: req.body.content,
                    author_id: user.id,
                    createdAt: Date.now()
                })
                .then(() => res.status(201).json({message: 'Article soumis!'}))
                .catch(error => res.status(500).json({error}))
            )
            .catch((error) => res.status(503).json({error}))   
        }       
    })
    .catch(error => res.status(500).json({error}))
}