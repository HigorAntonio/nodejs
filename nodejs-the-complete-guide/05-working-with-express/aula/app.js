const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/add-product', (req, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button>');
});

app.use('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});