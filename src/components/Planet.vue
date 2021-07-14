<template>
  <section :class="['planet-lottie', 'planet-lottie--' + name]">
    <PlanetLayers
      ref="multiLayer"
      :animationData="lottie"
      v-if="lottie"
      :rendererSettings="
        space
          ? {
              preserveAspectRatio: 'xMidYMax meet',
            }
          : undefined
      "
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';
import PlanetLayers from 'src/components/PlanetLayers.vue';
import { AnimationItem } from 'lottie-web';
import { useRouter } from 'vue-router';

interface MultiLayer {
  layerAnims: Map<string, AnimationItem>;
  layerRefs: Map<string, Ref>;
}

interface Config {
  play: string[];
  href: string;
}

export default defineComponent({
  components: { PlanetLayers },
  name: 'PlanetLottie',
  props: {
    config: {
      type: Object,
    },
    name: {
      type: String,
    },
    autoplay: {
      type: Boolean,
    },
    space: {
      type: String,
    },
  },
  setup(props) {
    const name = props.name as string;
    let lottieJSON: unknown;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      lottieJSON = require(`../assets/${
        props.space || 'planet'
      }/${name}.json`) as unknown;
    } catch {}
    const lottie = ref(lottieJSON);
    const multiLayer = ref(PlanetLayers);

    const router = useRouter();

    onMounted(() => {
      const { layerAnims, layerRefs } =
        multiLayer.value as unknown as MultiLayer;

      const hoverAnimationGen = (el: SVGPathElement, config: Config) => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          // TODO: Landing animation
          void router.push(config.href);
        });
        el.addEventListener('mouseover', () => {
          for (const el of config.play) {
            const anim = layerAnims.get(el);
            anim?.play();
          }
        });
        el.addEventListener('mouseleave', () => {
          for (const el of config.play) {
            const anim = layerAnims.get(el);
            anim?.pause();
          }
        });
      };

      if (!props.autoplay) {
        for (const [, anim] of layerAnims) {
          anim.stop();
        }
      }

      for (const [name, layer] of layerRefs) {
        const Element = layer.value as HTMLElement;

        Element.classList.add('planet-layer');

        if (name.includes('land')) {
          const Clip = Element.querySelector('svg > g') as SVGGElement;
          const Land = Clip.querySelector('g path') as SVGPathElement;

          if (Land) {
            Land.setAttribute('fill', 'transparent');
            Clip.style.pointerEvents = 'all';

            for (const nameFragment in props.config) {
              if (name.includes(nameFragment)) {
                const elements = props.config[nameFragment] as Config;
                hoverAnimationGen(Land, elements);
              }
            }
          }
        }
      }

      if (process.env.DEV) console.warn(layerAnims, layerRefs);
    });

    return {
      lottie,
      multiLayer,
    };
  },
});
</script>
<style lang="scss" scoped>
.planet-lottie {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
.bianca-east--country svg > g {
  clip-path: none !important;

  & > g:last-child {
    transform: scaleX(10) translateX(-30%) !important;
  }
}
.planet-lottie {
  &--anna-sw .planet-layer--Gras {
    z-index: -1;
  }

  &--dylan-south .planet-layer--Layer {
    svg {
      transform: scaleX(2) translateX(0%) !important;

      @media screen and (min-width: 186px) {
        transform: scaleX(4) translateX(0%) !important;
      }
    }
  }

  &--ruben-ne .planet-layer--grond,
  &--ruben-nw .planet-layer--grond,
  &--ruben-south .planet-layer--grond,
  &--dylan-nw .planet-layer--Layer,
  &--dylan-ne .planet-layer--lekker,
  &--bianca-north .planet-layer--Bottom,
  &--bianca-sw .planet-layer--Layer,
  &--anna-north .planet-layer--Zand,
  &--anna-sw .planet-layer--Gras,
  &--anna-se .planet-layer--Layer {
    svg {
      transform: scaleX(10) translateX(5%) !important;
    }
  }
}
</style>
