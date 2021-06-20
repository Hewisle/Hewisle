<template>
  <q-page :class="{ 'no-touchy': !spaceReady }">
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
        <a
          href="space/anna"
          class="planet planet--anna"
          title="Anna"
          alt="Anna"
        >
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
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { QScrollArea } from 'quasar';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
import LimitScrollspeedPlugin from '../utils/LimitScrollspeed';

export default defineComponent({
  name: 'space',
  setup() {
    const spaceArea = ref<QScrollArea>();
    const spaceReady = ref<boolean | undefined>(true);
    onMounted(() => {
      Scrollbar.use(OverscrollPlugin, LimitScrollspeedPlugin);
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
    });

    return {
      spaceArea,
      spaceReady,
    };
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
<style lang="scss">
.no-touchy {
  pointer-events: none;
  touch-action: none;
}
</style>
