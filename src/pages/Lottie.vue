<template>
  <div class="fullscreen">
    <Lottie :animationData="lottie"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Lottie from 'src/components/Lottie.vue';
import lottieJSON from '../assets/lottie.json'

export default defineComponent({
  components: { Lottie },
  name: 'Error404',
  data: () => ({
    lottie: lottieJSON
  })
});
</script>
