let express = require('express')
let reload = require('reload')
let http = require('http')

let app = express()
let port = 3000


app.get('/', (req, res) => {
  res.send('hello world')
})

let server = http.createServer(app)

reload(app).then((reloadReturned) => {
  server.listen(port)
}).catch()　