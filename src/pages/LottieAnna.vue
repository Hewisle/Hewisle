<template>
  <div class="fullscreen">
    <Lottie :animationData="lottie"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Lottie from 'src/components/Lottie.vue';
import lottieJSON from '../assets/planet/anna-animated.json'

export default defineComponent({
  components: { Lottie },
  name: 'PageLottieAnna',
  setup() {
    const lottie = ref(lottieJSON)
    return {
      lottie
    }
  }
});
</script>
