const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));