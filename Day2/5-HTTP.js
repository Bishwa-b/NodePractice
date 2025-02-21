const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to home page');
    return;
  }
  if (req.url === '/about') {
    res.end('We are an old company');
    return;
  }
  res.end(`<h1>Oops!</h1>
  <p>The page is not available</p>
  <a href='/'>Back to Home page</a>`);
});

server.listen(5000);
