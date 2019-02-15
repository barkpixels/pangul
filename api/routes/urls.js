const express = require('express');
const Router = express.Router;
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

module.exports = router;