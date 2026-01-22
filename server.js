const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serve static files
  if (req.url === '/' || req.url === '') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8'));
  } else if (req.url.startsWith('/public/')) {
    const filePath = path.join(__dirname, req.url);
    try {
      const content = fs.readFileSync(filePath);
      const ext = path.extname(filePath);
      let contentType = 'application/octet-stream';
      if (ext === '.js') contentType = 'application/javascript';
      if (ext === '.css') contentType = 'text/css';
      if (ext === '.json') contentType = 'application/json';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (err) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url === '/manifest.json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf-8'));
  } else {
    // 404 for other requests
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
