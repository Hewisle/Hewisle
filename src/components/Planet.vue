<template>
  <section class="planet-lottie">
    <PlanetLayers ref="multiLayer" :animationData="lottie" v-if="lottie" />
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
