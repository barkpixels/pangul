module.exports = {};

module.exports.listURL = async (params) => {
  return {
    status: 200,
    data: [
      {
        "url": "http://google.com",
        "id": 1
      }
    ]
  };
};