<template>
  <div
    :class="['planet-layer', 'planet-layer--' + key.replace(/ /gm, '_')]"
    v-for="[key, layerRef] of layerRefs"
    :ref="layerRef"
    :key="key"
  ></div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref, Ref, onMounted } from 'vue';
import Lottie, { AnimationItem } from 'lottie-web';

interface Props {
  animationData: { layers: { nm: string }[] };
}

export default defineComponent({
  name: 'PlanetLayers',
  setup(props) {
    const { animationData } = toRefs(props as Props);
    const { layers } = animationData.value;
    let layerRefs = new Map<string, Ref>();
    let layerAnims = new Map<string, AnimationItem>();

    let layerIndex = layers.length;
    for (layerIndex < 0; layerIndex--; ) {
      const { nm } = layers[layerIndex];
      layerRefs.set(nm, ref());
    }

    onMounted(() => {
      for (const [key, layerRef] of layerRefs) {
        const layer = layerRef.value as HTMLElement;
        const layerName: string = key;
        const layerData = {
          ...animationData.value,
          layers: [layers.find(({ nm }) => nm === layerName)],
        };
        layerAnims.set(
          layerName,
          Lottie.loadAnimation({
            container: layer,
            renderer: 'svg',
            animationData: layerData,
            rendererSettings: props.rendererSettings
          })
        );
      }
    });

    return { layerRefs, layerAnims };
  },
  props: {
    customStyle: {
      type: Object,
    },
    animationData: {
      type: [Object, Array],
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    rendererSettings: {
      type: Object
    }
  },
});
</script>

<style scoped>
.planet-layer {
  pointer-events: none;
  touch-action: none;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>