<template>
  <q-card class="fit">
    <div class="column items-center q-pa-lg justify-around full-height">
      <div
        class="lt-md col-1 row full-width justify-end order-first"
        style="max-width: 256px"
      >
        <div class="col col-auto">
          <q-btn icon="help" class="q-pa-none" flat @click="openHelpDialog" />
        </div>
      </div>
      <div class="row col-6 items-center full-width spaceship-row">
        <div class="col col-auto text-center">
          <q-btn
            flat
            round
            size="xl"
            icon="chevron_left"
            color="yellow"
            @click="previousSpaceship"
          />
        </div>
        <div class="col full-height">
          <q-carousel
            v-model="spaceship"
            infinite
            animated
            swipeable
            transition-next="ease-in-back"
            transition-prev="ease-out-back"
            class="bg-transparent"
            ref="selectSpaceship"
          >
            <q-carousel-slide
              v-for="spaceship in spaceships"
              @click="changeSpaceshipColor"
              @keypress="changeSpaceshipColor"
              role="button"
              tabindex="0"
              :name="spaceship"
              :key="spaceship"
              :title="spaceship"
              :class="`spaceship svg-${spaceshipColor}`"
              v-html="require(`!!../assets/spaceship/${spaceship}.svg?raw`)"
            />
          </q-carousel>
        </div>
        <div class="col col-auto text-center">
          <q-btn
            size="xl"
            flat
            round
            icon="chevron_right"
            @click="nextSpaceship"
            color="yellow"
          />
        </div>
      </div>
      <div
        class="
          row
          col col-3 col-md-4
          items-center
          justify-center
          full-width
          q-pb-lg
        "
        :class="$q.screen.lt.md && 'order-first'"
      >
        <div class="col" style="max-width: 256px">
          <q-input
            color="white"
            v-model="name"
            outlined
            dark
            label="Naam"
            input-style="font-family: 'Alien';letter-spacing: 4px;font-size: 14pt; "
            lazy-rules
            v-intersection="isInputInView"
          />
        </div>
      </div>
      <div class="row col col-auto col-md-2 justify-center full-width">
        <q-btn
          to="/space"
          @click.prevent="spaceshipLeaveAnimation"
          @mouseenter.once="prefetch"
          push
          color="yellow"
          class="text-black"
        >
          Start
        </q-btn>
      </div>
    </div>
  </q-card>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store';

import { QCarousel, useQuasar } from 'quasar';
import gsap, { Power4 } from 'gsap';
import getAbsolutePosition from '../utils/GetAbsolutePosition';
import UpdateFavicon from '../utils/UpdateFavicon';

import { TYPES } from '../constants/spaceship';
import HelpDialog from './HelpDialog.vue';

export default defineComponent({
  name: 'IndexSettings',
  setup(props, { emit }) {
    // Register local navigation functions
    const selectSpaceship = ref<QCarousel>();
    const updateFavicon = UpdateFavicon;

    const router = useRouter();
    const store = useStore();
    const $q = useQuasar();

    const name = computed({
      get: () => store.state.spaceship.name,
      set: (name) => store.commit('spaceship/setName', name),
    });
    const spaceship = computed({
      get: () => store.state.spaceship.type,
      set: (type) => store.commit('spaceship/setType', type),
    });
    const spaceshipColor = computed(() => store.state.spaceship.color);

    // Navigate through spaceship types
    const nextSpaceship = () => {
      selectSpaceship.value?.next();
      updateFavicon();
    };
    const previousSpaceship = () => {
      selectSpaceship.value?.previous();
      updateFavicon();
    };

    // Navigate through spaceship colors
    const changeSpaceshipColor = (next = true) => {
      void store.dispatch('spaceship/changeColor', next);
      updateFavicon(100);
    };

    // Listen globally for <-, ->, /\, \/ key navigation
    const keySelectSpaceship = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.code === 'ArrowLeft') previousSpaceship();
      else if (e.code === 'ArrowRight') nextSpaceship();
      else if (e.code === 'ArrowUp') changeSpaceshipColor();
      else if (e.code === 'ArrowDown') changeSpaceshipColor(false);
      else if (e.code === 'Space') setInterval(nextSpaceship, 1000);
    };

    // Scroll to input field when active and not visible
    const isInputInView = ({
      isIntersecting: visible,
      target,
    }: IntersectionObserverEntry) => {
      if (!visible && document.activeElement) {
        const [input] = Array.from(target.getElementsByTagName('INPUT'));
        if (document.activeElement === input) {
          setTimeout(() => {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }
    };

    // Animate spaceship before page leave
    const spaceshipLeaveAnimation = () => {
      if (!name.value) name.value = 'Obi-Wan';

      const spaceshipSVG: SVGElement | null =
        document.querySelector('.q-carousel svg');
      if (spaceshipSVG) {
        const from = getAbsolutePosition(spaceshipSVG);
        const clone = spaceshipSVG.cloneNode(true) as CloneElement;
        const fire = clone.querySelector('#spaceship-fire') as HTMLElement;

        fire.setAttribute('display', 'block');
        updateFavicon(1, clone);
        spaceshipSVG.style.display = 'none';
        clone.style.position = 'absolute';
        clone.classList.add('spaceship-clone', `svg-${spaceshipColor.value}`);
        gsap.set(clone, from);
        gsap.set(fire, {
          height: '-50%',
          transformOrigin: 'top right',
          scale: 0.5,
        });
        document.body.appendChild(clone);
        gsap.fromTo(clone, from, {
          x: '+=200',
          y: '-=200',
          ease: Power4.easeIn,
          duration: 2,
          width: '200px',
          height: '200px',
        });
        gsap.to(fire, {
          scale: 1,
        });
        gsap.to(clone, {
          x: window.innerWidth * 0.45,
          y: window.innerHeight * 0.75,
          yPercent: -50,
          xPercent: -50,
          left: 0,
          top: 0,
          duration: 3,

          delay: 2,
        });
        gsap.to(fire, {
          scale: 0.5,
          yPercent: -12.5,
          xPercent: 12.5,

          delay: 3,
        });
        setTimeout(() => {
          emit('start');
        }, 200);
        setTimeout(() => {
          void router.push('/space');
        }, 2500);
      }
    };

    const openHelpDialog = () => {
      $q.dialog({
        component: HelpDialog,
      });
    };

    const prefetch = () => {
      import(/* webpackChunkName: "space" */ 'src/pages/Space.vue');
    };

    onMounted(() => {
      document.addEventListener('keyup', keySelectSpaceship);
    });

    return {
      selectSpaceship,
      nextSpaceship,
      previousSpaceship,
      keySelectSpaceship,
      changeSpaceshipColor,
      spaceshipLeaveAnimation,
      isInputInView,
      spaceships: TYPES,
      name,
      spaceship,
      spaceshipColor,
      openHelpDialog,
      prefetch,
    };
  },
  onBeforeUnmount() {
    document.removeEventListener('keyup', this.keySelectSpaceship);
  },
});
</script>

<style lang="scss" scoped>
@keyframes slide-open {
  0% {
    transform: translateX(-5%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
.q-card {
  background: rgba(0, 0, 0, 0.25);
  transform: translate(-200%);
  animation: slide-open 0.75s forwards;
  animation-delay: 0.75s;

  .spaceship-row {
    max-width: 700px;

    @media screen and (min-width: $breakpoint-md-min) {
      margin-bottom: -64px;
      margin-top: 64px;
    }
  }

  .q-carousel {
    height: 100%;
    &__slide {
      display: flex;
      justify-content: center;
      cursor: pointer;
      position: absolute;

      &::v-deep() svg {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
