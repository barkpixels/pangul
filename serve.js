const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.argv['PORT'] || 8000;

// Config router
app.use('/api/v1/', require('./api/router'));

// Start router
app.listen(PORT, () => console.log(`Listenning on: ${PORT}!`));