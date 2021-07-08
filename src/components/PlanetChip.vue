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
      :class="position"
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
    position: String,
  },
});
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.q-chip {
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: $breakpoint-md-min) {
    display: block !important;
    background: transparent;
    opacity: 0;
    animation: fadeIn 2s ease forwards;
    animation-delay: 2s;
    &.left {
      left: unset;
      right: 0;
      transform: translate(75%, -50%);
    }
    &.right {
      transform: translate(25%, -50%);
      left: unset;
      right: 100%;
    }
    &.top {
      transform: translate(-50%, 0%);
      top: unset;
      bottom: -2vw;
    }
  }
}
</style>
