// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app

.use(express.static('public'))

.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

.post('/upload', upload.single('file'), (req, res) => {
  const { size } = req.file
  res.json({ size })
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
