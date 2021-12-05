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
  server.listen(port, () => {
    console.log(`Web server listening on port ${port}`);
  })
}).catch((err) => {
  console.error('Reload could not start, could not start server/sample.app', err);
})