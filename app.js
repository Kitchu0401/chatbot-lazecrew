let express = require('express')

let morgan = require('morgan')
let bodyParser = require('body-parser')

const app = express()
const port = 8555

app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const keyboard = {
  type: 'buttons',
  buttons: ['안녕?', '오늘 날씨는 어때?', '오늘 미세먼지는 어때?']
}

app.get('/keyboard', (req, res) => {
  res.send(keyboard)
})

app.post('/message', (req, res) => {
  let content = req.body.content
  let message = ''
  if ( content === '안녕?' ) {
    message = '안녕하세요, 반가워요!'
  } else if ( content === '오늘 날씨는 어때?' ) {
    message = '오늘 날씨는 화창한 여름 날씨예요!\n서울의 경우 최고 26도를 기록할 예정이니 시원한 아이스 아메리카노가 생각나실 것 같네요!'
  } else if ( content === '오늘 미세먼지는 어때?' ) {
    message = '확인해본 바 서울의 미세먼지 농도는 42로, 보통 입니다!\n\n5월 27일 오후 2시 측정치예요!'
  } else {
    message = '제가 이해 할 수 없는 명령이네요. 다시 말씀해주시겠어요?'
  }
  
  res.send({
    message: { text: message },
    keyboard: keyboard
  })
})

app.listen(port, () => {
    console.log('Express is listening on port', port)
})
