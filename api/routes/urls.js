const express = require('express');
const Router = express.Router;
// Acting on /api/v1/urls
const router = Router();

const logger = require('pino')();

const Service = require('../service/urls');

router.get('/', async(req, resp) => {
  let params = {};
  try{
    let ans = await Service.listURL(params);
    resp.status(ans.status).send(ans.data);
  } catch(e){
    logger.error(e);
    resp.sendStatus(500);
  }
});

router.post('/', async(req, resp)=>{
  let params = {
    url: req.body.url,
  }
  try{
    let ans = await Service.addURL(params);
    resp.status(ans.status).send(ans.data);
  } catch (e) {
    logger.error(e);
    resp.sendStatus(500);
  }
});

module.exports = router;