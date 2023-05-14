const {Articles} = require('../models/models')

class ArticleController {
    async create(req, res) {
        try {
            const {title, body} = req.body
            const article = await Articles.create({title, body})
            res.json(article)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async getById(req, res) {
        try {
            const {id} = req.params
            const article = await Articles.findByPk(id)
            res.json(article)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async getAll(req, res) {
        try {
            const article = await Articles.findAll()
            res.json(article)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async deleteArticle(req, res) {
        try {
            const {id} = req.params
            const article = await Articles.findByPk(id)
            const delArt = await article.destroy()
            res.json(delArt)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async updateArticle(req, res) {
        try {
            const {id} = req.params
            const {title, body} = req.body
            const article = await Articles.findByPk(id)
            article.updatedAt = new Date()
            article.title = title
            article.body = body
            await article.save()
            res.json(article)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new ArticleController()