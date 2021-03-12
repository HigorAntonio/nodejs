const http = require('http');
const url = require('url')
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const result = url.parse(req.url, true);
  const route = result.pathname;
  if ( fs.existsSync(`${__dirname}${route}.html`) ) {
    if(route === '/') {
      fs.readFile(`${__dirname}${route}.html`, (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if ( route === '/contato' ) {
      fs.readFile(`${__dirname}${route}.html`, (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } 
  } else if ( route === '/') {
    fs.readFile(`${__dirname}/artigos.html`, (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else {
    fs.readFile(`${__dirname}/erro.html`, (err, html) => {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor pronto na porta ${PORT}`);
})