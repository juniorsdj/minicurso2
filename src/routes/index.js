const db = require('./../config/database')
const LivroDAO = require('./../dao/LivroDAO')



module.exports = function (app) {
    app.get("/", function(req, resp){
        const livroDAO = new LivroDAO(db)
        livroDAO.getList()
            .then( (r) => {
                console.log(r)
            })
            .catch( (err) =>{
                console.log(err)
            })
    })
}

