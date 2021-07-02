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
        <div class="col-2 full-height">
          <router-link
            :to="`/space/${left.toLowerCase()}`"
            class="planet planet--side-left"
            :title="left"
            :alt="left"
            :key="'L_' + name"
          >
            <section>
              <q-btn icon="chevron_left" round class="text-yellow" flat></q-btn>
              <p>Planeet {{ left }}</p>
            </section>
            <q-img
              fit="contain"
              position="center"
              :src="require(`../assets/planet/${left.toLocaleLowerCase()}.svg`)"
            />
          </router-link>
        </div>
        <div class="col col-8 column absolute full-height planet-col">
          <a class="planet planet--main" :alt="nameCaptialize" @click.prevent>
            <planet :config="globalConfig[name]" :name="name" :key="name" />
          </a>
        </div>
        <div class="col-2 full-height">
          <router-link
            :to="`/space/${right.toLowerCase()}`"
            class="planet planet--side-right"
            :title="right"
            :alt="right"
            :key="'R_' + name"
          >
            <section>
              <p>Planeet {{ right }}</p>
              <q-btn
                icon="chevron_right"
                round
                class="text-yellow"
                flat
              ></q-btn>
            </section>
            <q-img
              fit="contain"
              position="center"
              :src="require(`../assets/planet/${right.toLowerCase()}.svg`)"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  watch,
  ref,
  onBeforeUnmount,
} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../store';
import gsap from 'gsap';

import createSpareShip from '../utils/CreateSpareShip';

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
    const store = useStore();
    const route = useRoute();

    const globalConfig = CONFIG as GlobalConfig;
    const name = ref('');
    const names = Object.keys(globalConfig);

    name.value = route.params.name as string;

    const toCapital = (value: string) => {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    };

    const nameCaptialize = computed(() => toCapital(name.value));

    const left = computed(() => {
      const pos = names.indexOf(name.value);
      return toCapital(pos === 0 ? names[names.length - 1] : names[pos - 1]);
    });
    const right = computed(() => {
      const pos = names.indexOf(name.value);
      return toCapital(pos === names.length - 1 ? names[0] : names[pos + 1]);
    });

    const spaceshipType = computed(() => store.state.spaceship.type);
    const spaceshipColor = computed(() => store.state.spaceship.color);

    watch(
      () => route.params.name,
      () => {
        name.value = route.params.name as string;
      }
    );

    const goBack = () => {
      document.location.href = '/space';
    };

    onMounted(() => {
      const [wrapper] = document.getElementsByClassName('planet-wrapper');
      const [planet] = document.getElementsByClassName('planet--main');
      const welcome = document.getElementById('welcome');
      const explainer = document.getElementById('explainer');
      let [spaceship] = document.getElementsByClassName(
        'spaceship-clone'
      ) as HTMLCollectionOf<CloneElement>;

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
        y: 0,
        yPercent: 0,
        duration: 2.5,
      });
      gsap.to(planet, {
        rotation: 360,
        duration: 180,
        repeat: -1,
        ease: 'linear',
      });

      if (!spaceship) {
        spaceship = createSpareShip(spaceshipType.value, spaceshipColor.value);
      }

      spaceship.classList.add('world');
      spaceship.addEventListener('click', goBack);
    });

    onBeforeUnmount(() => {
      let [spaceship] = document.getElementsByClassName(
        'spaceship-clone'
      ) as HTMLCollectionOf<CloneElement>;
      spaceship.removeEventListener('click', goBack);
      spaceship.classList.remove('world');
    });

    return {
      name,
      nameCaptialize,
      globalConfig,
      left,
      right,
    };
  },
});
</script>
<style lang="scss">
.spaceship-clone {
  &.world {
    transition: transform 2s ease;
    transform: translate(100px, 350px) scale(0.8) rotate(-90deg) !important;
    transform: translate(max(100px, 12vw), 350px) scale(0.8) rotate(-90deg) !important;
    pointer-events: all;
    cursor: pointer;

    @media screen and (max-width: $breakpoint-md-min) {
      left: 50% !important;
      top: 500px !important;
      transform: translate(-50%, -50%) scale(0.9) rotate(-90deg) !important;
    }

    &.spaceship--its_a_trap {
      transform: translate(100px, 350px) scale(0.8) !important;
      transform: translate(max(100px, 12vw), 350px) scale(0.8) !important;

      @media screen and (max-width: $breakpoint-md-min) {
        transform: translate(-50%, -50%) scale(0.9) !important;
      }
    }
  }
}
</style>
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
    z-index: -1;
  }

  &-wrapper--relative {
    position: relative;
    height: 100vh;
    width: 100%;
    margin-top: 20vh;

    @media screen and (max-width: $breakpoint-sm-max) {
      height: 60vh;
    }
  }
  &-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    align-items: flex-start;
    transform: translateY(100%);
  }

  &--side-left,
  &--side-right {
    text-decoration: none;
    position: relative;

    section {
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(max(-14vw, -400px));
    }
    p {
      color: white;
      margin: 0;
    }
  }
  &--side-left {
    .q-img {
      transform: translateX(-50%);
    }
    section {
      left: 0;
      margin-left: 1rem;
    }
    p {
      margin-left: 1rem;
    }
  }
  &--side-right {
    .q-img {
      transform: translateX(50%);
    }
    section {
      right: 0;
      margin-right: 1rem;
    }
    p {
      margin-right: 1rem;
    }
  }
  &--main {
    &::v-deep() .planet-lottie {
      @media screen and (max-width: $breakpoint-md-max) {
        transform: scale(1.3);
      }
      @media screen and (max-width: $breakpoint-sm-max) {
        transform: scale(1.2);
      }
    }
  }

  .q-img {
    width: 100%;
    height: 100%;
  }
}
</style>
