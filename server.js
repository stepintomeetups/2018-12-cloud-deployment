const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 8080

const app = express()

routes(app)

app.listen(port)

console.log(`Server started on: ${port}`)

module.exports = app