<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <q-chip
      v-show="visible"
      square
      class="text-white q-px-lg q-py-lg absolute"
      size="xl"
    >
      <slot />
    </q-chip>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlanetChip',
  props: {
    visible: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.q-chip {
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
