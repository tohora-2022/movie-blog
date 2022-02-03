const path = require('path')
const express = require('express')

const blogs = require('./routes/blogs')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/blogs', blogs)

module.exports = server
