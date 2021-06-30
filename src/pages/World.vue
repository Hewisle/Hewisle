<template>
  <div class="space">
    <div id="welcome" class="row justify-center q-mx-xl q-mt-xl">
      <h2 class="col-auto">Welkom bij planeet {{ nameCaptialize }}</h2>
    </div>
    <div id="explainer" class="row justify-center q-mx-xl">
      <p style="max-width: 560px">
        Bekijk deze planeet van alle kanten en kies een land uit om naartoe te
        reizen. Er is genoeg te zien.
      </p>
    </div>

    <div class="row planet-wrapper--relative full-width">
      <div class="row planet-wrapper full-width justify-between">
        <div class="col-2">
          <a
            href="/scroll"
            class="planet planet--side-left"
            title="Ruben"
            alt="Ruben"
            @click.prevent
          >
            <q-img fit="contain" :src="require('../assets/planet/ruben.svg')" />
          </a>
        </div>
        <div class="col col-8 column absolute full-height planet-col">
          <a class="planet planet--main" :alt="nameCaptialize" @click.prevent>
            <planet :config="globalConfig[name]" :name="name" />
          </a>
        </div>
        <div class="col-2">
          <a
            href="/scroll"
            class="planet planet--side-right"
            title="Bianca"
            alt="Bianca"
          >
            <q-img
              fit="contain"
              :src="require('../assets/planet/bianca.svg')"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

import Planet from '../components/Planet.vue';
import { CONFIG } from '../constants/globalConfig';

interface GlobalConfig {
  [index: string]: {
    [index: string]: {
      play: string[];
      href: string;
    };
  };
}

export default defineComponent({
  components: {
    Planet,
  },
  setup() {
    const globalConfig = CONFIG as GlobalConfig;
    const name = useRoute().params.name as string;

    const nameCaptialize = computed(() => {
      if (!name) return '';
      const value = name.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    onMounted(() => {
      const [wrapper] = document.getElementsByClassName('planet-wrapper');
      const [planet] = document.getElementsByClassName('planet--main');
      const welcome = document.getElementById('welcome');
      const explainer = document.getElementById('explainer');
      gsap.set(wrapper, {
        yPercent: 100,
      });
      gsap.to(welcome, {
        opacity: 1,
        yPercent: 0,
        delay: 1.5,
        duration: 1,
      });
      gsap.to(explainer, {
        opacity: 1,
        yPercent: 0,
        delay: 1.5,
        duration: 1,
      });
      gsap.to(wrapper, {
        yPercent: 0,
        duration: 2.5,
      });
      gsap.to(planet, {
        rotation: 360,
        duration: 180,
        repeat: -1,
        ease: 'linear',
      });
    });

    return {
      name,
      nameCaptialize,
      globalConfig,
    };
  },
});
</script>
<style lang="scss" scoped>
#welcome,
#explainer {
  opacity: 0;
  transform: translateY(-50%);
}

.space {
  position: relative;
  overflow: hidden;
  width: 100vw;
  left: 50%;
  transform: translate(-50%);
}
.planet {
  display: block;
  max-height: 960px;
  width: 100%;
  height: 100%;

  &-col {
    left: 50%;
    transform: translateX(-50%);
  }

  &-wrapper--relative {
    position: relative;
    height: 100vh;
    width: 100%;
    margin-top: 20vh;
  }
  &-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    align-items: flex-start;
  }

  &--side-left {
    transform: translate(-50%, 50%);
  }
  &--side-right {
    transform: translate(50%, 50%);
  }
  &--main {
    &::v-deep() .planet-lottie {
      @media screen and (max-width: $breakpoint-md-max) {
        transform: scale(1.5);
      }
    }
  }

  .q-img {
    width: 100%;
    height: 100%;
  }
}
</style>
