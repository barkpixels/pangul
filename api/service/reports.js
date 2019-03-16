const Model = require('../models/reports')
const logger = require('pino')()

module.exports = {}

module.exports.getReportURL = async ({ id, page, size, where }) => {
  let list = await Model.list_url({ url_id: id })
  console.log(list)
  return {
    status: 200,
    data: list.map(rep => ({
      responseDateTime: rep.respTime,
      requestDateTime: rep.reqTime,
      IsUp: rep.isUp,
      URL: {
        url: rep.url,
        id: id,
      },
      id: rep.id,
    })),
  }
}

module.exports.listReport = async ({ page, size, where }) => {
  let list = await Model.list()
  return {
    status: 200,
    data: list.map(rep => ({
      responseDateTime: rep.respTime,
      requestDateTime: rep.reqTime,
      IsUp: rep.isUp,
      URL: {
        url: rep.url.url,
        id: rep.url.id,
      },
      id: rep.id,
    })),
  }
}
