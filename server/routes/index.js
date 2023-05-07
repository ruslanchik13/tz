const Router = require('express')
const router = new Router()
const articlesController = require('../controllers/articleConrtoller')

router.post('/article/#ID#/comment/')
router.get('/article/#ID#/comments/')
router.path('/article/#ID#/comment/#COMMENT_ID#/')
router.delete('/article/#ID#/comment/#COMMENT_ID#/')

// Articles
router.post('/article', articlesController.create)
router.get('/article/:id', articlesController.getById)
router.get('/articles', articlesController.getAll)
router.put('/article/:id', articlesController.update)
router.delete('/:id', articlesController.delete)

module.exports = router