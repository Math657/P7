const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Sequelize = require('sequelize')
const userRoutes = require('./routes/user')
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

app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
next()
})

app.use(bodyParser.json())

app.use('/api/auth', userRoutes)

module.exports = app