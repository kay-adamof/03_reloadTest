let express = require('express')
let reload = require('reload')
let http = require('http')

let app = express()



app.set('port',process.env.PORT || 3000)
app.get('/', (req, res) => {
  res.sendFile("index.html", {root: __dirname})
})
app.listen(3000)

// let server = http.createServer(app)

// reload(app).then((reloadReturned) => {
//   server.listen(app.get('port'), () => {
//     console.log(`port:${app.get('port')}`);
//   })
// }).catch()　