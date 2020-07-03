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


router.post('/', ensureAuth, async (req, res) => {
  try{
    req.body.user = req.user.id

    await Story.create(req.body)

    console.log(req.body.user, "req.body.user")
    console.log(req.user, "req.user")

    res.redirect('/dashboard')

  } catch (err){
    console.err(err)
    res.render('error/500')
  }
})

module.exports = router
