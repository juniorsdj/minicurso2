const db = require('./../config/database')
const LivroDAO = require('./../dao/LivroDAO')



module.exports = function (app) {
    app.get("/", function(req, resp){
        const livroDAO = new LivroDAO(db)
        livroDAO.getList()
            .then( (r) => {
                resp.send(r)
            })
            .catch( (err) =>{
                console.log(err)
            })
    })

    app.post("/cadastrar", (req, resp) =>{
        const newLivro = req.body
        
    })
}

