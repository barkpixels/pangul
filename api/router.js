const express = require('express');
const Router = express.Router;

const router = Router();

router.use('/urls', require('./routes/urls'));
// router.use('/reports', require('./routes/reports'));

module.exports = router;