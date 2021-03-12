const fs = require('fs');

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  const { url, method } = req;

  if(url === '/') {
    res.write('<html>');
    res.write('<title>Enter a message</title>');
    res.write('<body>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();  
  }
  if (req.url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });      
    });
  }

  res.write('<html>');
  res.write('<title>understanding the basics</title>');
  res.write('<body>');
  res.write('<h1>Hello from Node server!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;