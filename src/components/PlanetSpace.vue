<template>
  <a
    :href="`space/${name}`"
    :alt="nameCaptialize"
    @click.prevent
    @mouseenter="nameTag = true"
    @mouseleave="nameTag = false"
  >
    <planet-chip :visible="nameTag">
      <strong>{{ nameCaptialize }}</strong>
    </planet-chip>
    <div class="planet--img-wrapper" :data-planet="name">
      <lottie :animationData="require(`../assets/planet/${name}.json`)" />
    </div>
  </a>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import Lottie from './Lottie.vue';
import PlanetChip from './PlanetChip.vue';
export default defineComponent({
  name: 'PlanetSpace',
  components: { PlanetChip, Lottie },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const nameCaptialize = computed(() => {
      if (!props.name) return '';
      const value = props.name.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    const nameTag = ref(false);

    return { nameCaptialize, nameTag };
  },
});
</script>
