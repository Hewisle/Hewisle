<template>
  <q-layout style="height: 100%">
    <div
      class="row items-stretch justify-around q-gutter-xl"
      style="max-width: 960px; margin: 0 auto; height: 100%"
    >
      <a
        href="/scroll"
        class="planet col col-xs-12 col-sm-12 col-md-4"
        title="Ruben"
        alt="Ruben"
      >
        <q-img contain :src="require('../assets/ruben_world.png')" />
      </a>
      <div class="planet col col-xs-12 col-sm-12 col-md-4">
        <q-img contain :src="require('../assets/anna_world.png')" />
      </div>
      <div class="planet col col-xs-12 col-sm-12 col-md-4">
        <q-img contain :src="require('../assets/dylan_world.png')" />
      </div>
      <div class="planet col col-xs-12 col-sm-12 col-md-4">
        <q-img contain :src="require('../assets/bianca_world.png')" />
      </div>
    </div>
  </q-layout>
</template>
<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.planet {
  animation: rotate 180s linear infinite;
  .q-img {
    width: 100%;
    height: 100%;
    // max-width: 350px;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
