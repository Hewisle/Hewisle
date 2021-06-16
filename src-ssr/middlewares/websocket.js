import { ssrMiddleware } from 'quasar/wrappers'

export default ssrMiddleware(({ app }) => {
  const http = require('http').createServer(app)
  const io = require('socket.io')(http, {
    cors: {
      origin: "*"
    },
    transports: ['websocket'],
    // path: '/itsi-v2/'
  })

  //Whenever someone connects this gets executed
  io.on('connection', function (socket) {
    console.log('A user connected');

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
      console.log('A user disconnected');
    });
  });
  try {
    http.listen(4001)
  } catch {
    console.warn("IN USE")
  }
})


