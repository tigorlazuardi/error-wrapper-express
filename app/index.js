const express = require('express')
const app = express()
const errorMiddleware = require('./error_middleware')
const router = require('./routes')

app.use(express.json())

app.use(router)

app.use(errorMiddleware)

module.exports = app
