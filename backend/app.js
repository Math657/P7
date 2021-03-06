const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const userRoutes = require('./routes/user')
const articlesRoutes = require('./routes/articles')
const commentsRoutes = require('./routes/comments')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

const db = require('./config/database')

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Bearer')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})


app.use(cookieParser())

app.use(bodyParser.json())

app.use('/api/auth', userRoutes)
app.use('/api/auth', articlesRoutes)
app.use('/api/auth', commentsRoutes)

module.exports = app