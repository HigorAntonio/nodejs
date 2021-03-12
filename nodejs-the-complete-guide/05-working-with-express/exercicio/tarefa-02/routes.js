const path = require('path');

const express = require('express');

const rootDir = require('./utils/path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/users', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

router.use('/', (req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

module.exports = router;