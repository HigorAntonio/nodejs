const http = require('http');
const fs = require('fs');
const leituraAsync = require('./leitura_async');
const leituraSync = require('./leitura_sync');
const arquivo = './node-v12.16.1-linux-x64.tar.xz';
let stream = fs.createWriteStream(arquivo);
let download = 'http://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz';
http.get(download, (res) => {
  console.log('Fazendo download do Node.js');
  res.on('data', (data) => {
    stream.write(data);
  });
  res.on('end', () => {
    stream.end();
    console.log('Download finalizado!');
    leituraAsync(arquivo);
    leituraSync(arquivo);
  });
});