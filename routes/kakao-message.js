let express = require('express')
let router = express.Router()

router.post('/', (req, res) => {
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

module.exports = router