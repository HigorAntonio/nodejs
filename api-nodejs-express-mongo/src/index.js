require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})