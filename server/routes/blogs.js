const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getBlogs()
    .then(blogs => {
      res.json(blogs)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addBlog(req.body)
    .then(() => {
      return db.getBlogs()
    })
    .then((blogs) => {
      res.json(blogs)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
