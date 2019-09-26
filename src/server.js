const express = require('express')

const port = 3000

const routes = require('./routes/index')

const app = express()

routes(app)

app.listen(port, function(){
    console.log("server is running on", port)
})