<template>
  <q-layout class="index column items-center" :class="leave && 'index-leave'">
    <h1>Portfolio</h1>
    <div class="q-px-lg q-pb-lg" style="width: 100vw;max-width: 1920px;">
      <div class="row q-col-gutter-xl">
        <div class="col col-12 col-md-6">
          <index-intro />
        </div>
        <div class="col col-12 col-md-6 settings">
          <index-settings @start="leave = true" />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import IndexIntro from 'src/components/IndexIntro.vue';
import IndexSettings from 'src/components/IndexSettings.vue';

export default defineComponent({
  components: { IndexIntro, IndexSettings },
  name: 'PageIndex',
  setup: () => {
    const leave = ref(false);

    // Destroy lost spaceships
    onMounted(() => {
      const spaceships = document.getElementsByClassName('spaceship-clone');
      if (spaceships.length) {
        Array.from(spaceships).forEach((ship) => ship.remove());
      }
    });
    return {
      leave,
    };
  },
});
</script>
<style lang="scss" scoped>
.settings {
  overflow: clip;
  height: auto;

  @media screen and (max-width: $breakpoint-md-max) {
    height: 580px;
  }
  @media screen and (max-width: $breakpoint-sm-max) {
    height: 500px;
    padding-top: 0
  }
}
</style>
<style lang="scss">
.index {
  transform-origin: left center;
  transition: transform 2s cubic-bezier(0.64, 0, 0.78, 0);
}
.index-leave {
  transform: rotateZ(12deg) translate(-160px, 100%);
  overflow: hidden;
}
</style>
