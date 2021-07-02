<template>
  <div id="space" ref="spaceArea">
    <div class="space-wrapper">
      <visitors />
      <planet-space
        v-for="name of ['ruben', 'anna', 'dylan', 'bianca']"
        :class="[`planet planet--${name}`, 'original']"
        :key="name"
        :name="name"
        @click="onPlanetClick(name)"
      />
      <div class="launch-pad"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  onBeforeUnmount,
} from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import CustomEase from '../utils/CustomEase';

import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import LimitScrollspeedPlugin from '../utils/LimitScrollspeed';
import createSpareShip from '../utils/CreateSpareShip';
import createNameChip from '../utils/CreateNameChip';

import PlanetSpace from './PlanetSpace.vue';
import Visitors from './Visitors.vue';
import getAbsolutePosition from 'src/utils/GetAbsolutePosition';

Scrollbar.use(OverscrollPlugin, LimitScrollspeedPlugin);
gsap.registerPlugin(CustomEase);

export default defineComponent({
  name: 'space',
  components: { PlanetSpace, Visitors },
  setup() {
    const spaceArea = ref<HTMLElement>();
    const position = ref({ x: 0, y: 0 });
    const mouse = ref({ x: 0, y: 0 });
    const lock = ref(false);
    const trackMouseRef = ref();
    const isMoving = ref(false);
    const multiplayerInterval = ref();
    const nameChip = ref();

    const store = useStore();
    const router = useRouter();

    const spaceshipType = computed({
      get: () => store.state.spaceship.type,
      set: (type) => store.commit('spaceship/setType', type),
    });
    const spaceshipColor = computed(() => store.state.spaceship.color);
    const name = computed(() => store.state.spaceship.name);

    const rotateInfinite = (el: Element) =>
      gsap.to(el, { rotation: 360, duration: 180, repeat: -1, ease: 'linear' });

    onMounted(() => {
      let [spaceship] = document.getElementsByClassName(
        'spaceship-clone'
      ) as HTMLCollectionOf<CloneElement>;
      let planetWrappers = document.getElementsByClassName(
        'planet--img-wrapper'
      ) as HTMLCollectionOf<HTMLElement>;
      let timeout = 2500;

      position.value = {
        x: window.innerWidth * 0.45,
        y: window.innerHeight * 0.75,
      };

      gsap.fromTo(
        spaceArea.value as HTMLElement,
        {
          scale: 0.2,
          xPercent: 50,
          yPercent: -200,
        },
        {
          scale: 1,
          xPercent: -50,
          yPercent: 0,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ease: CustomEase.create('easeOutBack ', '0.34, 1.56, 0.64, 1'),
          duration: 3,
        }
      );

      const scrollbar = Scrollbar.init(
        document.querySelector('#space') as HTMLElement,
        {
          plugins: {
            horizontalScroll: false,
          },
        }
      );
      scrollbar.track.xAxis.element.remove();
      scrollbar.track.yAxis.element.remove();

      // Next tick
      setTimeout(() => {
        scrollbar.update();
        // Scroll to bottom
        scrollbar.scrollTo(0, scrollbar.size.content.height, 3000, {});
        // Rotate wrapper
        for (const wrapper of planetWrappers) rotateInfinite(wrapper);
      }, 0);

      if (!spaceship) {
        spaceship = createSpareShip(spaceshipType.value, spaceshipColor.value);
        timeout = 1000;
      } else if (!spaceship.classList.contains('greetings-from-index')) {
        gsap.to(spaceship, {
          x: window.innerWidth * 0.45,
          y: window.innerHeight * 0.75,
          left: 0,
          top: 0,

          width: '200px',
          height: '200px',
          yPercent: -50,
          xPercent: -50,
          duration: 2,
        });
      } else {
        spaceship.classList.remove('greetings-from-index')
      }

      nameChip.value = createNameChip(name.value, spaceshipColor.value);

      window.addEventListener('mousemove', (e) => {
        if (lock.value) return;
        mouse.value.x = e.x;
        mouse.value.y = e.y;
      });

      const xSet = gsap.quickSetter([spaceship, nameChip.value], 'x', 'px');
      const ySet = gsap.quickSetter([spaceship, nameChip.value], 'y', 'px');

      const ROT_OFFSET = spaceshipType.value === 'its_a_trap' ? 0 : 45;
      const ROT_MAX = -45;
      const FPMS = 60 / 1000;
      const SPEED = 0.01;

      const spaceshipFire = spaceship.querySelector('#spaceship-fire');

      trackMouseRef.value = (time: number, deltaTime: number) => {
        var delta = deltaTime * FPMS;
        var dt = 1.0 - Math.pow(1.0 - SPEED, delta);

        if (mouse.value.x || mouse.value.y) {
          position.value.x += (mouse.value.x - position.value.x) * dt;
          position.value.y += (mouse.value.y - position.value.y) * dt;

          const dx = mouse.value.x - position.value.x;
          const dy = mouse.value.y - position.value.y;

          if (Math.abs(dx) < 3 && Math.abs(dy) < 3) {
            if (isMoving.value) isMoving.value = false;
            return;
          } else if (!isMoving.value) isMoving.value = true;

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
      };

      setTimeout(() => {
        gsap.ticker.add(trackMouseRef.value);

        gsap.to(spaceshipFire, {
          height: '-50%',
          display: 'block',
          scale: 0.5,
          transformOrigin: 'top right',
          yPercent: -12.5,
          xPercent: 12.5,
        });
      }, timeout);

      multiplayerInterval.value = setInterval(() => {
        if (isMoving.value) {
          const { x, y } = position.value;
          const xPercent = Math.round((x / window.innerWidth) * 1000) / 1000;
          const yPercent = Math.round((y / window.innerHeight) * 1000) / 1000;
          void store.dispatch('spaceship/move', {
            x: xPercent,
            y: yPercent,
            type: spaceshipType.value,
            color: spaceshipColor.value,
          });
        }
      }, 750);
    });

    const onPlanetClick = (name: string) => {
      lock.value = true;

      const space = spaceArea.value as HTMLElement;
      const [planet] = space.getElementsByClassName(
        `planet--${name}`
      ) as HTMLCollectionOf<HTMLElement>;
      const [stars] = document.getElementsByClassName(
        'background--stars'
      ) as HTMLCollectionOf<HTMLElement>;
      const clone = planet.cloneNode(true);
      const meta = getAbsolutePosition(planet);

      (clone as HTMLElement).classList.remove('original');
      gsap.set(planet, { scale: 1.05 });
      gsap.set(clone, meta);
      document.body.appendChild(clone);

      const [wrapper] = (clone as HTMLElement).getElementsByClassName(
        'planet--img-wrapper'
      ) as HTMLCollectionOf<HTMLElement>;

      rotateInfinite(wrapper);
      planet.style.opacity = '0';
      planet.style.display = 'none';
      planet.classList.add('no-touchy');
      gsap.to(clone, {
        left: window.innerWidth / 2 - meta.width / 2,
        top: window.innerHeight + meta.height / 2,
        duration: 3,
        delay: 0.25,
      });
      gsap.to(stars, {
        scale: 0.9,
        rotate: 12.5,
        duration: 2.5,
        yPercent: -10,
      });
      gsap.to(spaceArea.value as HTMLElement, {
        scale: 0.9,
      });
      gsap.to(spaceArea.value as HTMLElement, {
        xPercent: name === 'dylan' ? -100 : 25,
        yPercent: name === 'ruben' ? -100 : 200,
        duration: 4,
        rotate: 45,
        delay: 0.125,
      });
      gsap.to(stars, {
        scale: 1.2,
        rotate: -3,
        duration: 2.5,
        yPercent: -20,
        delay: 2.5,
      });

      setTimeout(() => {
        void router.push(`/space/${name}`);
      }, 1500);
    };

    onBeforeUnmount(() => {
      if (multiplayerInterval.value) {
        clearInterval(multiplayerInterval.value);
        multiplayerInterval.value = null;
      }
      gsap.ticker.remove(trackMouseRef.value);
      if (nameChip.value) document.body.removeChild(nameChip.value);
    });

    return { spaceArea, onPlanetClick };
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
  text-decoration: none;

  &.original {
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.05);
    }
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

  &::v-deep() {
    .planet--img-wrapper,
    .lottie {
      width: 100%;
      height: 100%;
    }
    .lottie svg {
      transform: scale(1.2) !important;
    }
  }
}
</style>
