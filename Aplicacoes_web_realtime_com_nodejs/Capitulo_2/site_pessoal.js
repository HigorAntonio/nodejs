const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((request, response) => {
  fs.readFile(__dirname + '/index.html', (err, html) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  })
});

server.listen(PORT, () => {
  console.log(`Servidor pronto na porta ${PORT}`);
})