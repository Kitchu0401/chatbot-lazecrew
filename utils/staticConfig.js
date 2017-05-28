let fs = require('fs')
let path = require('path')

const configFilePath = path.resolve(__dirname, '../../config.json');

let config = {}

try {
  config = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'))['chatbot-lazecrew'] || {};
} catch(err) {
  console.error(err, '[extractConfig] Failed to find configFile.');
}

module.exports = config