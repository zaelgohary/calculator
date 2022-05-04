const express = require('express');

const server = express()

server.get('*', (req, res) => {
  const html = `
  <html lang="">
  <head>
    <title>hello</title>
  </head>
  <body>
      HELLO!!!
  </body>
  </html>
  `;
    res.end(html)
})


server.listen(8080)