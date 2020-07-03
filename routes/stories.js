const express = require('express')
const passport = require('passport')
const router = express.Router()
const {
  ensureAuth
} = require('../middleware/auth.js')

const Story = require('../models/Story.js')

router.get('/add', ensureAuth, (req, res) => {
  res.render('stories/add')
})

module.exports = router
