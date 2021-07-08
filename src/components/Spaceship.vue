<template>
  <object ref="gsapEl" v-html="spaceship"></object>
</template>
<script lang="ts">
import gsap, { Linear } from 'gsap';
import { defineComponent, onMounted, watch, onBeforeUnmount, ref } from 'vue';

export default defineComponent({
  props: {
    type: String,
    color: String,
    x: Number,
    y: Number,
  },
  setup(props) {
    const spaceship = ref();
    const gsapEl = ref();
    const trackMouseRef = ref();

    const template = document.createElement('template');
    const rawSVG =
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require(`!!../assets/spaceship/${
        props.type || 'rocky'
      }.svg?raw`) as string;
    template.innerHTML = rawSVG;
    const spaceshipEl = template.content.firstChild as CloneElement;
    spaceshipEl.style.position = 'absolute';
    spaceshipEl.classList.add(
      'spaceship-clone',
      `svg-${props.color || 'blue'}`
    );
    spaceship.value = template.innerHTML;

    onMounted(() => {
      gsap.to(gsapEl.value, {
        left: ((props.x || 0) * 100).toString() + '%',
        top: ((props.y || 0) * 100).toString() + '%',
        ease: Linear.easeNone,
        duration: 1,
      });
      watch(props, (props) => {
        gsap.to(gsapEl.value, {
          left: ((props.x || 0) * 100).toString() + '%',
          top: ((props.y || 0) * 100).toString() + '%',
          ease: Linear.easeNone,
          duration: 1,
        });
      });
    });
    onBeforeUnmount(() => {
      gsap.ticker.remove(trackMouseRef.value);
    });

    return { spaceship, gsapEl };
  },
});
</script>
<style lang="scss" scoped>
object {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  opacity: 0.4;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
