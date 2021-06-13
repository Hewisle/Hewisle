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
  max-width: 1400px;
  left: 50%;
  transform: translateX(-50%);
}
.planet {
  display: block;
  max-width: 40%;
  position: absolute;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.02);
  }

  &--ruben {
    width: 26%;
    height: 40%;
    left: 15%;
    top: 5%;
  }
  &--dylan {
    width: 25%;
    height: 35%;
    right: 15%;
    top: 10%;
  }
  &--bianca {
    width: 27%;
    height: 43%;
    left: 10%;
    bottom: 2%;
  }
  &--anna {
    width: 28%;
    height: 45%;
    right: 5%;
    bottom: 0%;
  }

  @media screen and (max-width: $breakpoint-sm-max) {
    &--ruben {
      width: 30%;
      left: 7%;
      top: 7%;
    }
    &--dylan {
      width: 29%;
      right: 10%;
      top: 0%;
    }
    &--bianca {
      left: 10%;
      bottom: 20%;
      height: 30%;
      width: 33%;
    }
    &--anna {
      width: 32%;
      right: 15%;
      bottom: 5%;
      max-height: 30%;
    }
  }

  .q-img {
    width: 100%;
    height: 100%;
    animation: rotate 180s linear infinite;
  }
}
</style>
