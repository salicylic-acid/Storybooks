const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth.js')

router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login'
  })
})

router.get('/dashboard', ensureAuth, (req, res) => {
  consoe.log(req.user)
  res.render('dashboard', {
    layout: 'main'
  })
})


module.exports = router
