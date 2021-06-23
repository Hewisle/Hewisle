<template>
  <lottie-planet :config="config" name="anna" style="height: 100vh; width: 100vw;"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LottiePlanet from 'src/components/Planet.vue';

export default defineComponent({
  components: {
    LottiePlanet,
  },
  setup() {
    const config = {
      boven: { play: ['Giraf 1 Outlines', 'Giraf 2 Outlines'] },
      links: {
        play: ['Bloem 1 Outlines', 'Bloem 2 Outlines', 'Bloem 3 Outlines'],
      },
      rechts: { play: ['Satelliet Outlines'] },
    };
    return { config };
  },
});
</script>
