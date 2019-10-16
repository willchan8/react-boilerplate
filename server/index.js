const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => console.log(`Listening on PORT ${port}...`));