//  Import Express : A web framework of nodejs
let express = require('express')
// Import reload : Automatic browser reloader.
let reload = require('reload')

// Create app
let app = express()

// If user send URL in browse, return "index.html".
app.get('/', (req, res) => {
  res.sendFile("index.html", {root: __dirname})
})

// Connect app with browse by using port:3000
app.listen(3000)

// Browser will reload, if the server is refresed by supervisor
reload(app)