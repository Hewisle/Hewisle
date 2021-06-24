<template>
  <q-layout class="q-pa-xl" style="min-height: 1px" id="scroll-x">
    <slot />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
// import gsap from 'gsap';

class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll';
  transformDelta(delta: { x: number; y: number }, fromEvent: Event) {
    if (!/wheel/.test(fromEvent.type)) return delta;
    const { x, y } = delta;
    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
    };
  }
}

export default defineComponent({
  setup() {
    onMounted(() => {
      Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
      const scrollbar = Scrollbar.init(
        document.querySelector('#scroll-x') as HTMLElement,
        {}
      );
      scrollbar.track.xAxis.element.remove();
      scrollbar.track.yAxis.element.remove();
    });
  },
});
</script>

<style lang="scss" scoped>
#scroll-x {
  overflow: hidden;
  max-width: 100vw;

  &::v-deep() .scroll-content {
    height: 100%;
  }
}
</style>
