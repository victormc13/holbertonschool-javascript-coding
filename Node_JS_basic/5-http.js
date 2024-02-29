const http = require('http');
const countStudents = require('./3-read_file_async.js');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    const message = await countStudents(database);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
