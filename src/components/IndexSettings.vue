<template>
  <div class="settings">
    <div class="settings--wrapper">
      <q-card class="fit">
        <div class="column items-center justify-around full-height">
          <div class="col col-5 col-auto full-width align-center">
            <div class="row items-center full-height">
              <div class="col text-center">
                <q-btn
                  flat
                  round
                  size="xl"
                  icon="chevron_left"
                  @click="previousSpaceship"
                />
              </div>
              <div class="col col-4 full-height">
                <q-carousel
                  v-model="spaceship"
                  keep-alive
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
                    :class="`svg-${spaceshipColor}`"
                    v-html="
                      require(`!!raw-loader!../assets/spaceship/${spaceship}.svg`)
                        .default
                    "
                  />
                </q-carousel>
              </div>
              <div class="col text-center">
                <q-btn
                  size="xl"
                  flat
                  round
                  icon="chevron_right"
                  @click="nextSpaceship"
                />
              </div>
            </div>
            <div class="row items-center justify-center q-mt-lg">
              <div class="col" style="max-width: 256px;">
                <q-input
                  color="white"
                  v-model="name"
                  outlined
                  dark
                  label="Naam"
                  style=""
                  input-style="font-family: 'Alien';letter-spacing: 4px;font-size: 14pt; "
                  lazy-rules
                />
              </div>
            </div>
          </div>
          <div
            class="col col-auto q-mb-lg"
            style="width: 55%; max-width: 256px;"
          >
            <!-- <q-btn to="/space" push color="yellow" class="text-black q-my-lg"> -->
            <q-btn
              @click="spaceshipLeaveAnimation"
              push
              color="yellow"
              class="text-black q-my-lg"
            >
              Start
            </q-btn>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { QCarousel } from 'quasar';

import gsap, { Power4 } from 'gsap';
// import { useRouter } from 'vue-router'
import getAbsolutePosition from '../utils/GetAbsolutePosition';

const SPACESHIPS = ['rocky', 'its_a_trap', 'always_been', 'nyan_cat'];
const COLORS = [
  'blue',
  'light-blue',
  'teal',
  'green',
  'light-green',
  'amber',
  'deep-orange',
  'purple',
  'deep-purple'
];

export default defineComponent({
  name: 'IndexSettings',
  setup(props, { emit }) {
    // Register local navigation functions
    const selectSpaceship = ref<QCarousel>();
    const nextSpaceship = () => selectSpaceship.value?.next();
    const previousSpaceship = () => selectSpaceship.value?.previous();
    
    // const router = useRouter()
    console.warn(props)

    // Set default properties
    // TODO: move to $store
    const spaceships = SPACESHIPS;
    const spaceship = ref(SPACESHIPS[0]);
    const spaceshipColors = COLORS;
    const spaceshipColor = ref(COLORS[0]);

    // Navigate through spaceship colors
    const changeSpaceshipColor = (next = true) => {
      const currentColorIndex = spaceshipColors.indexOf(spaceshipColor.value);
      if (!next && currentColorIndex <= 0) {
        spaceshipColor.value = spaceshipColors[spaceshipColors.length - 1];
      } else if (!next) {
        spaceshipColor.value = spaceshipColors[currentColorIndex - 1];
      } else if (currentColorIndex === spaceshipColors.length - 1) {
        spaceshipColor.value = spaceshipColors[0];
      } else {
        spaceshipColor.value = spaceshipColors[currentColorIndex + 1];
      }
    };

    // Listen globally for <-, ->, /\, \/ key navigation
    const keySelectSpaceship = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.code === 'ArrowLeft') previousSpaceship();
      else if (e.code === 'ArrowRight') nextSpaceship();
      else if (e.code === 'ArrowUp') changeSpaceshipColor();
      else if (e.code === 'ArrowDown') changeSpaceshipColor(false);
    };

    // Animate spaceship before page leave
    const spaceshipLeaveAnimation = () => {
      const spaceshipSVG: HTMLElement | null = document.querySelector(
        '.q-carousel svg'
      );
      if (spaceshipSVG) {
        const from = getAbsolutePosition(spaceshipSVG);
        const clone = spaceshipSVG.cloneNode(true) as HTMLElement;
        spaceshipSVG.style.display = 'none';
        clone.style.position = 'absolute';
        gsap.set(clone, from);
        document.body.appendChild(clone);
        const timeline = gsap.timeline();
        timeline.fromTo(clone, from, {
          top: '-=200',
          left: '+=200',
          ease: Power4.easeOut,
          duration: 2
        });
        emit('start');
        timeline.to(clone, {
          left: '25%',
          top: '75%'
        })
      }
    };

    return {
      selectSpaceship,
      nextSpaceship,
      previousSpaceship,
      keySelectSpaceship,
      changeSpaceshipColor,
      spaceships,
      spaceship,
      spaceshipColors,
      spaceshipColor,
      spaceshipLeaveAnimation,
      // TODO: move to $store
      name: ''
    };
  },
  mounted() {
    document.addEventListener('keyup', this.keySelectSpaceship);
  },
  onBeforeUnmount() {
    document.removeEventListener('keyup', this.keySelectSpaceship);
  }
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
.settings {
  max-width: 700px;
  width: 100%;
  height: 100%;
  &--wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .q-card {
    position: absolute;
    background: rgba(0, 0, 0, 0.25);
    transform: translate(-200%);
    animation: slide-open 0.75s forwards;
    animation-delay: 0.75s;

    .q-carousel {
      height: 100%;

      &__slide {
        // height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
<style lang="scss">
$colors: 'blue', 'light-blue', 'teal', 'green', 'light-green', 'amber',
  'deep-orange', 'purple', 'deep-purple';

@each $color in $colors {
  .svg-#{$color} {
    .fill-primary-dark {
      transition: fill 0.25s ease;
      fill: var(--#{$color}-10) !important;
    }
    .stroke-primary-dark {
      transition: stroke 0.25s ease;
      stroke: var(--#{$color}-10) !important;
    }
    .fill-primary {
      transition: fill 0.25s ease;
      fill: var(--#{$color}) !important;
    }
  }
}
</style>
