<template>
  <div class="settings">
    <div class="settings--wrapper">
      <q-card class="fit">
        <div class="column items-center justify-between full-height">
          <div class="col col-auto full-width align-center">
            <div class="row items-center q-my-xl">
              <div class="col text-center">
                <q-btn
                  flat
                  round
                  icon="chevron_left"
                  @click="previousSpaceship"
                />
              </div>
              <div class="col">
                <q-carousel
                  v-model="spaceship"
                  keep-alive
                  infinite
                  animated
                  swipeable
                  transition-next="slide-left"
                  transition-prev="slide-right"
                  class="bg-transparent"
                  ref="selectSpaceship"
                >
                  <q-carousel-slide
                    v-for="spaceship in spaceships"
                    @click="changeSpaceshipColor"
                    role="button"
                    tabindex="0"
                    :name="spaceship"
                    :key="spaceship"
                    :title="spaceship"
                  >
                    <div
                      class="spaceship full-width"
                      :class="`svg-${spaceshipColor}`"
                      v-html="
                        require(`!!raw-loader!../assets/spaceship/${spaceship}.svg`)
                          .default
                      "
                    />
                  </q-carousel-slide>
                </q-carousel>
              </div>
              <div class="col text-center">
                <q-btn flat round icon="chevron_right" @click="nextSpaceship" />
              </div>
            </div>
          </div>
          <div class="col col-auto q-mb-lg" style="width: 55%">
            <q-input
              color="white"
              v-model="name"
              outlined
              dark
              label="Naam"
              input-style="font-family: 'Alien';letter-spacing: 4px;font-size: 14pt"
              lazy-rules
            />
            <q-btn
              :to="name && '/space'"
              push
              size="lg"
              color="yellow"
              class="text-black q-my-lg full-width"
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
  setup() {
    // Register local navigation functions
    const selectSpaceship = ref<QCarousel>();
    const nextSpaceship = () => selectSpaceship.value?.next();
    const previousSpaceship = () => selectSpaceship.value?.previous();

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
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.settings {
  position: relative;
  width: 0px;
  &--wrapper {
    width: 375px;
    height: 75%;
    top: 12.5%;
    overflow: hidden;
    position: absolute;
  }
  .q-card {
    position: absolute;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: rgba(0, 0, 0, 0.25);
    transform: translate(-100%);
    animation: slide-open 1s forwards;
    animation-delay: 0.75s;

    .q-carousel {
      height: 146px;

      &__slide {
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
      fill: var(--#{$color}-10) !important;
    }
    .stroke-primary-dark {
      stroke: var(--#{$color}-10) !important;
    }
    .fill-primary {
      fill: var(--#{$color}) !important;
    }
  }
}
</style>
