const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  console.log('Time: ', Date.now())
  res.send('Login')
})

router.get('/dashboard', (req, res) => {
  console.log(`Time: ${Date.now()}`)
  res.send('Dashboard')
})

router.get('/about', (req, res) => {
  console.log(req)
  console.log('...........')
  console.log(res)
  res.send('About')
})

router.post('/submit', (req, res) => {
  const post = req.body
  console.log('postSubmit', req)
  res.send('Testing')
})

module.exports = router
