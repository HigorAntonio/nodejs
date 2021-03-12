const http = require('http');

const PORT = 3000;

const server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  if (request.url === '/') {
    response.write("<h1>Pagina Principal</h1>")
  } else if (request.url === '/bemvindo') {
    response.write("<h1>Bem-vindo :)</h1>")
  } else {
    response.write("<h1>Pagina nao encontrada :(</h1>")
  }
  response.end();
});

server.listen(PORT, () => {
  console.log(`Servidor pronto na porta ${PORT}`)
});