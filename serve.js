const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const PORT = process.argv['PORT'] || 8000;

// Config router
app.use('/api/v1/', require('./api/router'));

// Start router
app.listen(PORT, () => console.log(`Listenning on: ${PORT}!`));