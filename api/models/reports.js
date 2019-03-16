const Sequelize = require('sequelize')
const URLS = require('./urls')

class Reports {
  constructor(seq) {
    this.seq = seq
    this.reports = seq.define('report', {
      reqTime: Sequelize.DATE,
      respTime: Sequelize.DATE,
      isUp: Sequelize.BOOLEAN,
    })

    // Add relation to urls
    this.reports.belongsTo(URLS.url)

    this.reports.sync()

    // this.reports.create({
    //   reqTime: 0,
    //   respTime: 0,
    //   isUp: true,
    //   urlId: 1
    // });
  }

  list_url({ url_id }) {
    // return this.reports.findAll({where: {
    //   urlId: url_id,
    // }});
    const Q = `select r.id, r.respTime, r.reqTime, r.isUp, u.url, u.id as url_id from reports as r join urls as u on r.urlId=u.id where r.urlId=?;`
    return this.seq.query(Q, {
      replacements: [url_id],
      type: Sequelize.QueryTypes.SELECT,
    })
  }

  list() {
    return []
  }
}

module.exports = new Reports(require('./seq'))
