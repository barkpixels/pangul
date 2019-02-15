const Sequelize = require('sequelize');

class URLS {
  constructor(seq){
    this.url = seq.define('url', {
      url: Sequelize.STRING(256),
    });
    this.url.sync();
  }

  async list(){
    return await this.url.findAll();
  }

  async get(id){
    // TODO handle missing case
    return await this.url.findById(id);
  }

  async add(url){
    // TODO check for duplicated entry
    return await this.url.create({
      url: url.url
    });
  }
}

module.exports = new URLS(require('./seq'));
setImmediate(()=>{
  module.exports.add({ url: 'https://youtube.com' });
});