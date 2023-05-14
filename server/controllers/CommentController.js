const {Comments} = require('../models/models')

class CommentController {
    async createComment(req, res) {
        try {
            const {body} = await req.body
            const articleId = req.params.id
            const comment = await Comments.create({
                body,
                articleId,
            })
            res.json(comment)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async getAll(req, res) {
        try {
            const articleId = req.params.id
            const comments = await Comments.findAll({
                where: {
                    articleId,
                }
            })
            res.json(comments)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async getByID(req, res) {
        try {
            const {id: articleId, comment: commentId} = req.params
            const comments = await Comments.findOne({
                where:{
                    id: commentId,
                    articleId,
                }})
            res.json(comments)
        } catch (err) {
            res.status(500).json(err)

        }
    }

    async updateComment(req, res) {
        try {
            const {id: articleId, comment: commentId} = req.params
            const {body} = req.body
            const comment = await Comments.findOne({
                    where: {
                        id: commentId,
                        articleId,
                    }
                })
            comment.updatedAt = new Date()
            comment.body = body
            await comment.save()
            res.json(comment)
        } catch(err) {
            res.status(500).json(err)
        }
    }

    async deleteComment(req, res) {
        try {
            const {id: articleId, comment: commentId} = req.params
            const comment = await Comments.findOne({
                where: {
                    id: commentId,
                    articleId,}
            })
            const delComment = comment.destroy()
            res.json(delComment)
        } catch (err) {
            res.status(500).json(err)

        }
    }

}

module.exports = new CommentController()