let express = require('express')
let router = express.Router()

const keyboard = {
  type: 'buttons',
  buttons: ['안녕?', '오늘 날씨는 어때?', '오늘 미세먼지는 어때?']
}

router.get('/', (req, res) => {
  res.send(keyboard)
})

module.exports = router