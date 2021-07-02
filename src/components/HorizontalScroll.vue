<template>
  <q-layout style="min-height: 1px" id="scroll-x">
    <slot />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Scrollbar from 'smooth-scrollbar';

const BREAKPOINT = 1023;

class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll';
  transformDelta(delta: { x: number; y: number }, fromEvent: Event) {
    if (window.innerWidth < BREAKPOINT) return { y: delta.y, x: 0 };
    if (!/wheel/.test(fromEvent.type)) return delta;
    const { x, y } = delta;
    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
    };
  }
}

Scrollbar.use(HorizontalScrollPlugin);

export default defineComponent({
  setup() {
    onMounted(() => {
      const scrollbar = Scrollbar.init(
        document.querySelector('#scroll-x') as HTMLElement,
        {
          plugins: {
            overscroll: false,
            limitScrollspeed: false,
          },
        }
      );
      scrollbar.track.xAxis.element.remove();
      scrollbar.track.yAxis.element.remove();
    });
  },
});
</script>

<style lang="scss" scoped>
#scroll-x {
  overflow: clip;
  max-width: 100vw;
  padding: 0 3rem 3rem 3rem;

  @media screen and (max-width: $breakpoint-sm-max) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  &::v-deep() .scroll-content {
    height: 100%;
  }
}
</style>
