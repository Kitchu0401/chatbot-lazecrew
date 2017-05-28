let express = require('express')
let mecab = require('mecab-ya')

let router = express.Router()

router.post('/:method', (req, res) => {
  callMecab(req.params.method, req.body.text)
  .then((result) => { res.json(result) })
  .catch((error) => { res.status(504).json(error) })
})

let callMecab = (method, text) => {
  if ( !/pos|morphs|nouns/.test(method) ) {
    throw `Invalid method name called: ${method}` 
  }

  return new Promise((onFulffiled, onRejected) => {
    mecab[method](text, (error, result) => {
      if ( error ) onRejected(error)
      onFulffiled(result)
    })
  })
}

module.exports = router