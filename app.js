let express = require('express')

const app = express()
const port = 8555

app.get('/keyboard', (request, response, next) => {
  response.send({
    'type': 'buttons',
    'buttons': ['Button #1', 'Button #2', 'Button #3']
  })
})

app.listen(port, () => {
    console.log('Express is listening on port', port)
})