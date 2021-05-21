const Router = require('express')
const router = new Router()
const ShopController = require('../controllers/ShopController')

router.get('/', ShopController.getAll)
router.get('/:id', ShopController.getOne)
router.post('/', ShopController.create)
router.post('/:id', ShopController.delete)

module.exports = router