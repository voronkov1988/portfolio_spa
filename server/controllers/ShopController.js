class ShopController {
    getAll (req, res){
        res.json('getall shop')
    }
    getOne (req, res) {
        res.json('single shop page')
    }
    create(req, res) {
        res.json('create product')
    }
    update(req, res) {
        res.json('update product')
    }
    delete(req, res) {
        res.json('delete product')
    }
}

module.exports = new ShopController()