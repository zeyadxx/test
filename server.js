const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:5500',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('🔗 User connected');

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing');
  });

  socket.on('disconnect', () => {
    console.log(' User disconnected');
  });
});

server.listen(3000, () => {
  console.log(' Server running on http://localhost:3000');
});
