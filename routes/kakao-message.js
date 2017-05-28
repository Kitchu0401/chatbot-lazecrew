let express = require('express')
let fineDust = require('../services/fine-dust')

let router = express.Router()

const COMMON_ERROR_MSG = '오류가 발생했습니다!\n관리자에게 문의해주세요! :('

const keyboard = {
  type: 'buttons',
  buttons: ['안녕?', '오늘 날씨는 어때?', '오늘 미세먼지는 어때?']
}

router.post('/', (req, res) => {

  let COMMON_HANDLE_SUCCESS = (message) => {
    res.send({
      message: { text: message },
      keyboard: keyboard
    })
  }

  let COMMON_HANDLE_ERROR = (error) => {
    console.error(error)
    res.send({
      message: { text: COMMON_ERROR_MSG },
      keyboard: keyboard
    })
  }
  
  let content = req.body.content
  let message = ''

  if ( content === '안녕?' ) {
    new Promise((onFurfilled, onRejected) => { return '안녕하세요, 반가워요!' })
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  } else if ( content === '오늘 날씨는 어때?' ) {
    new Promise((onFurfilled, onRejected) => { onFurfilled('오늘 날씨는 화창한 여름 날씨예요!\n서울의 경우 최고 26도를 기록할 예정이니 시원한 아이스 아메리카노가 생각나실 것 같네요!') })
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  } else if ( content === '오늘 미세먼지는 어때?' ) {
    // message = '확인해본 바 서울의 미세먼지 농도는 42로, 보통 입니다!\n\n5월 27일 오후 2시 측정치예요!'
    getFineDustInfo()
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  } else {
    new Promise((onFurfilled, onRejected) => { onFurfilled('제가 이해 할 수 없는 명령이네요. 다시 말씀해주시겠어요?') })
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  }
})

let getFineDustInfo = () => {
  return fineDust.get()
    .then((result) => {
      let dataList = result.data.dataList.map((data) => {
        return `${data.name}\t${data.value}`
      }).join('\n')
      return `최종 갱신시간: ${result.data.dataTime}\n\n${dataList}`
    })
}

module.exports = router