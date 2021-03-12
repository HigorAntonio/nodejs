const express = require('express');

const routes = require('./routes');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(routes);

app.listen(3000, () => {
  console.log('Ntalk no ar.');
});