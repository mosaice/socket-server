import './modules/log';
import { createServer } from 'http';
import socket from 'socket.io';

const server = createServer();

const io = socket(server, {
  // path: '/test',
  serveClient: false,
  origins: '*:*',
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: true
});

io.sockets.on('connection', socket => {
  socket.on('events', data => {
    console.log(data);
    socket.emit('events', 'ok');
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('listen ON', process.env.PORT || 3000);
  console.log('NODE_ENV = ', process.env.NODE_ENV);
});
