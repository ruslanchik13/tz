const Router = require('express')
const articleController = require('../controllers/ArticleController.js')
const commentController = require('../controllers/CommentController.js')

const router = new Router();

router.post('/article/', articleController.create)
router.get('/article/:id/', articleController.getById)
router.get('/articles/', articleController.getAll)
router.put('/article/:id/', articleController.updateArticle)
router.delete('/article/:id/', articleController.deleteArticle)


router.post('/article/:id/comment', commentController.createComment)
router.get('/article/:id/comment/:comment', commentController.getByID)
router.get('/article/:id/comments', commentController.getAll)
router.put('/article/:id/comment/:comment', commentController.updateComment)
router.delete('/article/:id/comment/:comment', commentController.deleteComment)

module.exports = router
