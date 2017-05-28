let axios = require('axios')
let config = require('../utils/staticConfig')

module.exports = {
  get: () => {
    return axios.get(config.serviceUrl.fineDust)
  }
}