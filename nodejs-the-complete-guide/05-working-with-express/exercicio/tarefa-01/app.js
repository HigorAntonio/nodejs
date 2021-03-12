require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;

const app = express();

// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Middleware 2');
//   res.send('Response');
// });

app.use('/users', (req, res, next) => {
  console.log('/users');
  res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
  console.log('index');
  res.send('<h1>index</h1>');
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});