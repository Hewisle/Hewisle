<template>
  <div class="intro">
    <q-card-section>
      <help-text intro />
    </q-card-section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HelpText from './HelpText.vue';

export default defineComponent({
  components: { HelpText },
});
</script>

<style lang="scss" scoped>
@import '../css/mixins';
@keyframes float-in {
  0% {
    opacity: 0;
    transform: translateY(-5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.intro {
  opacity: 0;
  transform: translateY(-10%);
  animation: float-in 1s forwards;
  @include content;

  ul,
  ol {
    margin: 0;
  }
}
</style>
