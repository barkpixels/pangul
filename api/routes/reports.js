const express = require('express')
const Router = express.Router
// Acting on /api/v1/urls
const router = Router()

const logger = require('pino')()

const Service = require('../service/reports')

router.get('/:id', async (req, resp) => {
  let params = {
    id: req.params.id,
  }
  try {
    let ans = await Service.getReportURL(params)
    resp.status(ans.status).send(ans.data)
  } catch (e) {
    logger.error(e)
    resp.sendStatus(500)
  }
})

router.get('/', async (req, resp) => {
  let params = {
    page: req.query.page || 1,
    size: req.query.size || 20,
    where: req.query.where || '',
  }
  try {
    let ans = await Service.listReport(params)
    resp.status(ans.status).send(ans.data)
  } catch (e) {
    logger.error(e)
    resp.sendStatus(500)
  }
})

// router.post('/', async(req, resp)=>{
//   let params = {
//     url: req.body.url,
//   }
//   try{
//     let ans = await Service.addURL(params);
//     resp.status(ans.status).send(ans.data);
//   } catch (e) {
//     logger.error(e);
//     resp.sendStatus(500);
//   }
// });

module.exports = router
