let express = require('express')
let mecab = require('mecab-ya')

let morgan = require('morgan')
let bodyParser = require('body-parser')

let nlp = require('./routes/nlp')
let keyboard = require('./routes/kakao-keyboard')
let message = require('./routes/kakao-message')

const app = express()
const port = 5000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/nlp', nlp)
app.use('/keyboard', keyboard)
app.use('/message', message)

app.listen(port, () => {
    console.log('Express is listening on port', port)
})
