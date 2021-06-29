import { ssrMiddleware } from 'quasar/wrappers';

export default ssrMiddleware(({ app }) => {
  const socket = require('../utils/websocket')
  socket(app)
});
