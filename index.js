const fs = require('fs')

const request = require('request')
const logger = require('pino')()

const CONF_FILE = './conf.json'

fs.readFile(CONF_FILE, (err, data) => {
  if (err) logger.error(data)
  let conf = JSON.parse(data.toString())
  logger.info('Finished parsing config')
  run_check(conf)
})

function run_check(conf) {
  conf.sites.map(health_check)
}

function health_check(url) {
  request(url, (err, resp, body) => {
    if (err) {
      logger.info(url + ': fail')
      return
    }
    logger.info(url + ': ok')
  })
}
