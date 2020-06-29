const express = require('express')
const dotenv = require('dotenv').config({path: './config/config.env'})
const connectDB = require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

connectDB()

const app = express()
const PORT = process.env.PORT || 5000


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

app.listen(PORT, console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`))
