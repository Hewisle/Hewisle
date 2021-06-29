/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { boot } from 'quasar/wrappers'
import { io } from 'socket.io-client';
import { StoreModel } from 'src/store';
import { Store } from 'vuex'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ store, app }/* { app, router, ... } */) => {
  // something to do
  const socket = io({
    transports: ['websocket'],
    path: '/itsi-v2/',
    auth: {
      ticket: (store as Store<StoreModel>).state.spaceship.token
    }
  });
  socket.on('connect', () => {
    console.log(socket.connected, socket.id);

    console.log(socket)
  });

  const updateItsiMeta = (position: string) => socket.emit('position', position)

  // app.config.globalProperties.$socket = socket
  app.provide('$socket', socket)
  store.commit('spaceship/setItsiMetaFn', updateItsiMeta)
})
