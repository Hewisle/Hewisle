<template>
  <q-page>
    <div class="space">
      <a href="/scroll" class="planet planet--ruben" title="Ruben" alt="Ruben">
        <q-img contain :src="require('../assets/planeet_ruben.svg')" />
      </a>
      <a href="/scroll" class="planet planet--anna" title="Anna" alt="Anna">
        <q-img contain :src="require('../assets/planeet_anna.svg')" />
      </a>
      <a href="/scroll" class="planet planet--dylan" title="Dylan" alt="Dylan">
        <q-img contain :src="require('../assets/planeet_dylan.svg')" />
      </a>
      <a
        href="/scroll"
        class="planet planet--bianca"
        title="Bianca"
        alt="Bianca"
      >
        <q-img contain :src="require('../assets/planeet_bianca.svg')" />
      </a>
    </div>
  </q-page>
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
.space {
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.planet {
  display: block;
  max-width: 30%;
  position: absolute;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
  }

  &--ruben {
    width: 25%;
    height: 40%;
    left: 15%;
    top: 5%;
  }
  &--dylan {
    width: 22%;
    height: 35%;
    right: 15%;
    top: 10%;
  }
  &--bianca {
    width: 28%;
    height: 43%;
    left: 10%;
    bottom: 2%;
  }
  &--anna {
    width: 30%;
    height: 45%;
    right: 5%;
    bottom: 0%;
  }
  .q-img {
    width: 100%;
    height: 100%;
    animation: rotate 180s linear infinite;
  }
}
</style>
