const Model = require('../models/urls')
const logger = require('pino')()

module.exports = {}

module.exports.listURL = async params => {
  let list = await Model.list()
  return {
    status: 200,
    data: list.map(url => ({
      url: url.url,
      id: url.id,
    })),
  }
}

module.exports.addURL = async ({ url }) => {
  let create = await Model.add({ url: url })
  return {
    status: 201,
    data: {
      url: create.url,
      id: create.id,
    },
  }
}

module.exports.getURL = async ({ id }) => {
  let URL = await Model.get(id)
  if (!URL) {
    return {
      status: 404,
      data: {},
    }
  }
  return {
    status: 200,
    data: {
      url: URL.url,
      id: URL.id,
    },
  }
}
