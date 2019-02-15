const Model = require('../models/urls');

module.exports = {};

module.exports.listURL = async (params) => {
  let list = await Model.list();
  return {
    status: 200,
    data: list.map(url => ({
      url: url.url,
      id: url.id,
    })),
  };
};