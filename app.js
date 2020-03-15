const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()


app.get('/', (req, res, next) => {
    console.log(req.params)
    res.sendFile(path.join(__dirname ,'./src/index.html'))
})

app.use('/', router)

app.listen(3000, () => console.log('Conectado puerto 3000'))