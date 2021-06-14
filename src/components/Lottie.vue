<template>
  <div ref="container" :style="style"></div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import Lottie from 'lottie-web';

export default defineComponent({
  name: 'Lottie',
  props: {
    customStyle: {
      type: Object
    },
    animationData: {
      type: [Object, Array]
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  data: () => ({}),
  computed: {
    style() {
      return {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
        ...this.customStyle
      };
    }
  },
  mounted() {
    this.object = Lottie.loadAnimation({
      container: this.$refs.container,
      renderer: 'svg',
      animationData: this.animationData
    });
    this.$emit('init', this.object);
  }
});
</script>
