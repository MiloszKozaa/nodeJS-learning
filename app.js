// TIME - 1:45:40
// MODULES - another file with functions or variables
// OS - operation system
// PATH - path to another file
// FS - file system sync
// FS - file system async

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello with /');
  }
  if (req.url === '/about') {
    res.end('Hello with /about');
  }
});

server.listen(5000);
