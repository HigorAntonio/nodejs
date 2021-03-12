const path = require('path');

require('dotenv').config();
const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});