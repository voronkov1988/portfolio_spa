class ArticlesController {
    getAll(req, res){
        res.json('all articles')
    }
    getOne(req, res) {
        res.json('single Article')
    }
    create(req, res) {
        res.json('create article')
    }
    update (req, res) {
        res.json('update article')
    }
}

module.exports = new ArticlesController()