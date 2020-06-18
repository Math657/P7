const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const userRoutes = require('./routes/user')
const articlesRoutes = require('./routes/articles')
var cors = require('cors')
require('dotenv').config()

// const path = require('path')

const db = require('./config/database')

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use(cors())

app.use(bodyParser.json())

app.use('/api/auth', userRoutes)
app.use('/api/auth', articlesRoutes)

module.exports = app