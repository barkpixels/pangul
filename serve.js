const express = require('express');

const app = express();

const PORT = process.argv['PORT'] || 8000;

// Config router
app.use('/api/v1/', require('./api/router'));

// Start router
app.listen(PORT, () => console.log(`Listenning on: ${PORT}!`));