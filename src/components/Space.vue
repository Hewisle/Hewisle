<template>
  <div id="space" ref="spaceArea">
    <div class="space-wrapper">
      <a
        href="space/ruben"
        class="planet planet--ruben"
        title="Ruben"
        alt="Ruben"
      >
        <q-img fit="contain" :src="require('../assets/planet/ruben.svg')" />
      </a>
      <a href="space/anna" class="planet planet--anna" title="Anna" alt="Anna">
        <q-img fit="contain" :src="require('../assets/planet/anna.svg')" />
      </a>
      <a
        href="space/dylan"
        class="planet planet--dylan"
        title="Dylan"
        alt="Dylan"
      >
        <q-img fit="contain" :src="require('../assets/planet/dylan.svg')" />
      </a>
      <a
        href="space/bianca"
        class="planet planet--bianca"
        title="Bianca"
        alt="Bianca"
      >
        <q-img fit="contain" :src="require('../assets/planet/bianca.svg')" />
      </a>
      <div class="launch-pad"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { QScrollArea } from 'quasar';
import { useStore } from '../store';
import gsap from 'gsap';

import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import LimitScrollspeedPlugin from '../utils/LimitScrollspeed';
import createSpareShip from '../utils/CreateSpareShip';

Scrollbar.use(OverscrollPlugin, LimitScrollspeedPlugin);

export default defineComponent({
  name: 'space',
  setup() {
    const spaceArea = ref<QScrollArea>();
    const position = ref({ x: 0, y: 0 });
    const mouse = ref({ x: 0, y: 0 });

    const store = useStore();

    const spaceshipType = computed({
      get: () => store.state.spaceship.type,
      set: (type) => store.commit('spaceship/setType', type),
    });
    const spaceshipColor = computed(() => store.state.spaceship.color);

    onMounted(() => {
      let [spaceship] = document.getElementsByClassName(
        'spaceship-clone'
      ) as HTMLCollectionOf<CloneElement>;
      let timeout = 2500

      position.value = {
        x: window.innerWidth * 0.45,
        y: window.innerHeight * 0.75,
      };

      const scrollbar = Scrollbar.init(
        document.querySelector('#space') as HTMLElement
      );
      scrollbar.track.xAxis.element.remove();
      scrollbar.track.yAxis.element.remove();

      // Next tick
      setTimeout(() => {
        scrollbar.update();
        // Scroll to bottom
        scrollbar.scrollTo(0, scrollbar.size.content.height, 3000, {});
      }, 0);

      if (!spaceship) {
        spaceship = createSpareShip(spaceshipType.value, spaceshipColor.value);
        timeout = 500
      }

      window.addEventListener('mousemove', (e) => {
        mouse.value.x = e.x;
        mouse.value.y = e.y;
      });

      setTimeout(() => {
        const spaceshipFire = spaceship.getElementById('spaceship-fire');
        const xSet = gsap.quickSetter(spaceship, 'x', 'px');
        const ySet = gsap.quickSetter(spaceship, 'y', 'px');

        const ROT_OFFSET = spaceshipType.value === 'its_a_trap' ? 0 : 45;
        const ROT_MAX = -45;
        const FPMS = 60 / 1000;
        const SPEED = 0.01;

        gsap.ticker.add((time, deltaTime) => {
          var delta = deltaTime * FPMS;
          var dt = 1.0 - Math.pow(1.0 - SPEED, delta);

          if (mouse.value.x || mouse.value.y) {
            position.value.x += (mouse.value.x - position.value.x) * dt;
            position.value.y += (mouse.value.y - position.value.y) * dt;

            const dx = mouse.value.x - position.value.x;
            const dy = mouse.value.y - position.value.y;

            if (Math.abs(dx) < 3 && Math.abs(dy) < 3) return;

            const destX = Math.min(Math.abs(dx) / 1000, 1);

            const rad = Math.atan2(dy, dx);
            const rotation = ROT_MAX * Math.sin(2 * rad) * destX;

            gsap.to(spaceship, {
              rotation: rotation - ROT_OFFSET,
            });
            gsap.to(spaceshipFire, {
              scale: Math.max(0, Math.min(-dy / 300, 0.7)),
            });
          }
          xSet(position.value.x);
          ySet(position.value.y);
        });

        gsap.to(spaceshipFire, {
          height: '-50%',
          display: 'block',
          scale: 0.5,
          transformOrigin: 'top right',
          yPercent: -12.5,
          xPercent: 12.5,
        });
      }, timeout);
    });

    return { spaceArea };
  },
});
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
@keyframes enter {
  to {
    transform: translateX(-50%);
  }
}
@keyframes float-in-left {
  to {
    transform: translateX(-50%);
  }
}
@keyframes float-in-right {
  to {
    transform: translateX(50%) scale(1);
  }
}
#space {
  position: absolute;
  left: 50%;
  max-width: 1920px;
  transform: scale(0.2) translateX(50%) translateY(-200%);
  animation: enter 3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  height: 100vh;

  .space-wrapper {
    height: 100vh;
    width: 100vw;
    @media screen and (max-width: $breakpoint-sm-max) {
      margin-bottom: 37vh;

      & .launch-pad {
        position: absolute;
        bottom: -50%;
        height: 1px;
        width: 1px;
        background: transparent;
      }
    }
  }
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
    width: 33%;
    height: 45%;
    right: 0%;
    bottom: 5%;
  }
  &--dylan {
    width: 22%;
    height: 35%;
    right: 18%;
    top: 10%;
  }
  &--bianca {
    width: 20%;
    height: 40%;
    left: 25%;
    top: 1%;
  }
  &--anna {
    width: 30%;
    height: 43%;
    left: 10%;
    bottom: 12%;
  }

  @media screen and (max-width: $breakpoint-sm-max) {
    &--ruben {
      top: unset;
      width: 30%;
      left: 20%;
      bottom: 70%;
    }
    &--dylan {
      top: unset;
      width: 28%;
      right: 5%;
      bottom: 43%;
      transform: translateY(-50%) translateX(-50%) scale(0.5);
      animation: float-in-right 2s ease forwards;
      &:hover {
        transform: scale(1.02) translateX(50%);
      }
    }
    &--bianca {
      top: unset;
      left: 1%;
      bottom: 10%;
      height: 30%;
      width: 33%;
      animation: float-in-left 5s ease forwards;
      animation-delay: 0.75s;
      &:hover {
        transform: scale(1.02) translateX(-50%);
      }
    }
    &--anna {
      left: unset;
      width: 32%;
      left: 69%;
      bottom: -40%;
      transform: translateY(-50%) translateX(-50%) scale(0.5);
      animation: float-in-right 5s ease forwards;
      &:hover {
        transform: scale(1.02) translateX(50%);
      }
    }
  }

  .q-img {
    width: 100%;
    height: 100%;
    animation: rotate 180s linear infinite;
  }
}
</style>
