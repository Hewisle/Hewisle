<template>
  <div class="country-layer" ref="country"></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Lottie from 'lottie-web';

export default defineComponent({
  name: 'PlanetLayers',
  setup(props) {
    const country = ref();

    let animationData: unknown;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      animationData = require(`../assets/${props.space || 'planet'}/${
        props.name as string
      }.json`) as unknown;
    } catch {}

    onMounted(() => {
      if (animationData) {
        Lottie.loadAnimation({
          container: country.value as HTMLElement,
          renderer: 'svg',
          animationData,
        });
      }
    });

    return { country };
  },
  props: {
    name: {
      type: String,
    },
    space: {
      type: String,
    },
  },
});
</script>

<style scoped>
.country-layer {
  pointer-events: none;
  touch-action: none;
  width: 100%;
  height: 100%;
}
</style>
