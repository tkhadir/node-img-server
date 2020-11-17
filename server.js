const express = require('express')
const http = require('http')
var cors = require('cors')
const https = require('https')
const fs = require('fs')
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/libkhadir.fr/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/libkhadir.fr/cert.pem')
}
const app = express()
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = 3000
require('./routes')(app)
const server = https.createServer(options, app)
module.exports = {
    server: server,
    PORT: PORT
}