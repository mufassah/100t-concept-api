const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

require('./app/routes')(app, {})

app.listen(port, () => {
console.log('Server running on port ' + port)
})
