const Router = require('express')
const router = new Router()
const articlesRouter = require('./articleRouter')
const shopRouter = require('./shopRouter')

router.use('/articles', articlesRouter)
// router.use('/portfolio',)
router.use('/shop', shopRouter)

module.exports = router