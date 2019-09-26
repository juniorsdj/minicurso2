class LivroDAO {
    constructor(db) {
        this._db = db
    }
    getList() {
        return new Promise(
            (resolve, reject) => {
                return this._db.all(`select * from livros`, (err, results) => {
                    if (err) {
                        return reject("não foi possível pegar a lista")
                    }
                    return resolve(results)
                })
            }
        )

    }

    adicionar(novoLivro) {
        return new Promise(
            (resolve, reject) => {
                return this._db.run(`INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                )values(?,?,?)
                `, [
                    novoLivro.titulo,
                    novoLivro.preco,
                    novoLivro.descricao
                ], (err, results) => {
                    if (err) {
                        return reject("não foi possível pegar a lista")
                    }
                    return resolve(results)
                })
            }
        )
    }
}

module.exports = LivroDAO




this._db.run(`INSERT INTO livros (
    titulo,
    preco,
    descricao
)values(?,?,?)
`, [
    novoLivro.titulo,
    novoLivro.preco,
    novoLivro.descricao
], (err) =>{
    if(!err){
        return resolve()
    }
    return reject("não foi possivel adicionar")
})