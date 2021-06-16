<template>
  <q-layout class="index column items-center" :class="leave && 'index-leave'">
    <h1>Portfolio</h1>
    <div class="row q-mb-xl" syle="width: 80%">
      <div class="col q-mx-lg">
        <index-intro />
      </div>
      <div class="col q-mx-lg">
        <index-settings @start="leave = true"/>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IndexIntro from 'src/components/IndexIntro.vue';
import IndexSettings from 'src/components/IndexSettings.vue';

export default defineComponent({
  components: { IndexIntro, IndexSettings },
  name: 'PageIndex',
  setup: () => {
    const leave = ref(false)
    return {
      leave
    }
  }
});
</script>
<style lang="scss">
.index {
  transform-origin: left center;
  transition: transform 2s cubic-bezier(0.64, 0, 0.78, 0);
}
.index-leave {
  transform: rotateZ(12deg) translate(-160px, 100%);
}
</style>
