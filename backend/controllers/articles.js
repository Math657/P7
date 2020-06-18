const article = require('../models/article')

exports.getAllArticles = (req, res) => {
    article.findAll()
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}
