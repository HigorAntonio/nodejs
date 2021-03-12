const requestHandler = (req, res) => {
  const { url, method } = req;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.statusCode = 200;
    res.write('<html>');
    res.write(' <head>');
    res.write('   <meta charset="UTF-8">');
    res.write('   <title>Praticing the basics</title>');
    res.write(' </head>');
    res.write(' <body>');
    res.write('   <form action="/create-user" method="POST">');
    res.write('     <input type="text" name="user">');
    res.write('     <button type="submit">Send</button>');
    res.write('   </form>');
    res.write(' </body>');
    res.write('</html>');
    res.end();
  }
  else if (url === '/users') {
    res.statusCode = 200;
    res.write('<html>');
    res.write(' <head>');
    res.write('   <meta charset="UTF-8">');
    res.write('   <title>Praticing the basics - Users</title>');
    res.write(' </head>');
    res.write(' <body>');
    res.write('   <h1>Users</h1>');
    res.write('   <ul>');
    res.write('     <li>User 1</li>');
    res.write('     <li>User 2</li>');
    res.write('     <li>User 3</li>');
    res.write('     <li>User 4</li>');
    res.write('     <li>User 5</li>');
    res.write('   </ul>');
    res.write(' </body>');
    res.write('</html>');
    res.end();
  }
  else if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      console.log(user);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
  else {
    res.statusCode = 404;
    res.write('<html>');
    res.write(' <head>');
    res.write('   <meta charset="UTF-8">');
    res.write('   <title>Praticing the basics</title>');
    res.write(' </head>');
    res.write(' <body>');
    res.write('   <h1>Page not found</h1>');
    res.write(' </body>');
    res.write('</html>');
    res.end();
  }
};

module.exports = requestHandler;