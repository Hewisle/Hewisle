<template>
  <div class="lottie" ref="lottieRef"></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Lottie from 'lottie-web';

interface AnimationData {
  layers: { nm: string }[];
}

export default defineComponent({
  name: 'Lottie',
  setup(props) {
    const lottieRef = ref<HTMLElement>();
    onMounted(() => {
      const data = props.animationData as AnimationData;
      const animationData = {
        ...data,
        layers: data.layers.filter(({ nm }) => !nm.includes('land')),
      };
      if (lottieRef.value) {
        Lottie.loadAnimation({
          container: lottieRef.value,
          renderer: 'svg',
          animationData,
        });
      }
    });

    return { lottieRef };
  },
  props: {
    customStyle: {
      type: Object,
    },
    animationData: {
      type: [Object, Array],
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
});
</script>

<style scoped>
.lottie {
  width: 100%;
  height: 100%;
}
</style>
