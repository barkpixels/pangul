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

module.exports.addURL = async({url}) => {
  let create = await Model.add({url: url});
  return {
    status: 201,
    data: {
      url: create.url,
      id: create.id
    }
  };
};