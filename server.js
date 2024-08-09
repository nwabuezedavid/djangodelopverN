
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
  
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.port || 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {n
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
 
      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})


// // server.js
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// app.get('/', (req, res) => {
//     res.send('Server is running.');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

//     // Handle WebRTC signaling events
//     socket.on('offer', (data) => {
//         socket.broadcast.emit('offer', data);
//     });

//     socket.on('answer', (data) => {
//         socket.broadcast.emit('answer', data);
//     });

//     socket.on('candidate', (data) => {
//         socket.broadcast.emit('candidate', data);
//     });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
