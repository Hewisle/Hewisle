const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
const Joi = require('joi');

const cfg = config().parsed;
const { TOKEN } = cfg;

const spaceshipSchema = Joi.object({
  x: Joi.number().max(1).required(),
  y: Joi.number().max(1).required(),
  name: Joi.string().max(30),
  type: Joi.string().max(30),
  color: Joi.string().max(30),
});

const startWebsockets = (app) => {
  const http = require('http').createServer(app);
  const io = require('socket.io')(http, {
    cors: {
      origin: process.env.DEV ? '*' : 'https://www.hewisle.nl',
    },
    transports: ['websocket'],
    path: '/itsi-v2/',
  });

  const positionDB = new Map();

  //Whenever someone connects this gets executed
  io.on('connection', function (socket) {
    console.log('A user connected', positionDB.size);
    let interval;

    socket.on('position', (data) => {
      const { error, value } = spaceshipSchema.validate(data);

      if (error) return socket.disconnect();

      positionDB.set(socket.ticket, {...value, id: socket.ticket});
    });

    interval = setInterval(() => {
      const visitors = Array.from(positionDB.values());
      socket.emit('visitors', visitors);
    }, 750);

    socket.on('disconnect', function () {
      console.log('A user disconnected', positionDB.size);
      positionDB.delete(socket.ticket)
      clearInterval(interval);
    });
  });

  io.use((socket, next) => {
    jwt.verify(socket.handshake.auth.ticket, TOKEN, function (err, decoded) {
      if (decoded) {
        socket.ticket = decoded.id;
        next();
      } else next(new Error('unauthorized'));
    });
  });

  http.once('error', function (error) {
    if (error.code === 'EADDRINUSE')
      console.log('Websocket is already running');
  });
  http.listen(process.env.SOCKET_PORT || 4001);
};

module.exports = startWebsockets;
