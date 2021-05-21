const Router = require('express')
const router = new Router()
const ArticlesController = require('../controllers/ArticlesController')


router.get('/', ArticlesController.getAll)
router.get('/:id', ArticlesController.getOne)
router.post('/', ArticlesController.create)

module.exports = router