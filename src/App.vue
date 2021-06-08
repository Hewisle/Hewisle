<template>
  <div id="q-app" style="height: 100%">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
// import { io } from 'socket.io-client';

export default defineComponent({
  name: 'App',
  mounted() {
    // const socket = io({
    //   transports: [ 'websocket']
    // });
    // socket.on('connect', () => {
    //   console.log(socket.connected, socket.id); // x8WIv7-mJelg7on_ALbx
    // });
  }
});
</script>
