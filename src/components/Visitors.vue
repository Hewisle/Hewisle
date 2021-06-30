<template>
  <div class="visitor-container">
    <Spaceship v-for="ufo in ufos" :key="ufo.id" v-bind="ufo" />
  </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Socket } from 'socket.io';
import {
  defineComponent,
  onMounted,
  inject,
  onBeforeUnmount,
  ref,
  computed,
} from 'vue';
import { useStore } from '../store';

import Spaceship from './Spaceship.vue';

export default defineComponent({
  components: {
    Spaceship,
  },
  setup() {
    const $socket = inject('$socket') as Socket;
    const ufos = ref<{ id: string }[]>([]);

    const store = useStore();
    const id = computed(() => store.getters['spaceship/getId']);

    const updateUfos = (visitors: []) =>
      (ufos.value = visitors.filter(({ id: _id }) => _id && id.value !== _id));

    onMounted(() => {
      $socket.on('visitors', updateUfos);
    });
    onBeforeUnmount(() => {
      $socket.off('visitors', updateUfos);
    });

    return { ufos, id };
  },
});
</script>
<style lang="scss" scoped>
.visitor-container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</style>
