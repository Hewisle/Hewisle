<template>
  <q-page class="overflow-hidden">
    <div class="space">
      <div class="row justify-center q-mx-xl q-mt-xl">
        <h2 class="col-auto">Welkom bij planeet {{ nameCaptialize }}</h2>
      </div>
      <div class="row justify-center q-mx-xl">
        <p style="max-width: 560px">
          Bekijk deze planeet van alle kanten en kies een land uit om naartoe te
          reizen. Er is genoeg te zien. Sleep de raket omhoog om van deze
          planeet te vertrekken.
        </p>
      </div>
      <div class="row planet-wrapper items-center full-width">
        <div class="col-2">
          <a
            href="/scroll"
            class="planet planet--side-left"
            title="Ruben"
            alt="Ruben"
          >
            <q-img fit="contain" :src="require('../assets/planet/ruben.svg')" />
          </a>
        </div>
        <div class="col column justify-end full-height">
          <a
            :href="`/space/${name}/north-east`"
            class="planet"
            :title="nameCaptialize"
            :alt="nameCaptialize"
          >
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
  </q-page>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import Planet from '../components/Planet.vue';

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
    const globalConfig: GlobalConfig = {
      anna: {
        boven: { play: ['Giraf 1 Outlines', 'Giraf 2 Outlines'], href: '' },
        links: {
          play: ['Bloem 1 Outlines', 'Bloem 2 Outlines', 'Bloem 3 Outlines'],
          href: '',
        },
        rechts: { play: ['Satelliet Outlines'], href: '' },
      },
      dylan: {
        onder: {
          play: ['Ikeabord 3 Outlines', 'Ikeabord 4 Outlines'],
          href: '',
        },
        links: { play: ['Cola Outlines'], href: '' },
        rechts: { play: ['Hans Outlines'], href: '' },
      },
      ruben: {
        onder: { play: [], href: '' },
        links: {
          play: [
            'Blok 1',
            'Blok 2',
            'Blok 3',
            'Blok 4',
            'Blok 5',
            'Blok 6',
            'Blok 7',
            'Blok 8',
            'Blok 9',
            'Blok 10',
            'Blok 11',
            'Blok 12',
            'Blok 13',
            'Blok 14',
            'Blok 15',
            'Blok 16',
            'Vergrootglas 1 Outlines',
            'Vergrootglas 2 Outlines',
          ],
          href: '',
        },
        rechts: { play: [], href: '' },
      },
    };
    const name = useRoute().params.name as string;

    const nameCaptialize = computed(() => {
      if (!name) return '';
      const value = name.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
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
@keyframes enter {
  from {
    transform: scale(0.2) translateX(50%) translateY(-100%);
  }
  to {
    transform: translateX(-50%);
  }
}
.space {
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  left: 50%;
  transform: translate(-50%);
}
.planet {
  display: block;
  max-height: 960px;
  width: 100%;
  height: 100%;

  &-wrapper {
    bottom: 5%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 360px;
  }

  &--side-left {
    transform: translate(-50%);
  }
  &--side-right {
    transform: translate(50%);
  }

  .q-img {
    width: 100%;
    height: 100%;
  }
}
</style>
