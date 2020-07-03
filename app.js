const express = require('express')
const app = express()
const dotenv = require('dotenv').config({
  path: './config/config.env'
})
const connectDB = require('./config/db')
const morgan = require('morgan')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const passport = require('passport')
require('./config/passport')(passport)
const PORT = process.env.PORT || 5000

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : -1;

connectDB()

//Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}))

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Handlebars
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

//Static
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

app.listen(PORT, console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`))
