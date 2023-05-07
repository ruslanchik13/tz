const {Articles} = require('../models/models')

class ArticlesController{
    async getAll(req, res){
        const posts = await Articles.findAll()
        return res.json(posts)
    }
    async create(req, res){
        const {title, text} = req.body
        const article = await Articles.create({title, text})
        return res.json(article.data)
    }
    async getById(req, res){
        const {id} = req.params
        const article = await Articles.findByPk(id)
        return res.json(article)

    }
    async delete(req, res){
        const {id} = req.params
        const article = await Articles.findByPk(id)
        const deleteArticle = await article.destroy()
        return res.json(deleteArticle)
    }
    async update(req, res){
        const {id} = req.params
        const {title, text} = req.body
        const article = await Articles.findOne({where: {id}})
        article.title = title
        article.text = text
        await article.save()
    }
}

module.exports = new ArticlesController()