<template>
  <a
    :href="`space/${name}`"
    :alt="nameCaptialize"
    @click.prevent
    @mouseenter="nameTag = true"
    @mouseleave="nameTag = false"
  >
    <planet-chip :visible="nameTag">
      <strong>Planeet {{ nameCaptialize }}</strong>
    </planet-chip>
    <q-img fit="contain" :src="require(`../assets/planet/${name}.svg`)" />
  </a>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import PlanetChip from './PlanetChip.vue';
export default defineComponent({
  name: 'PlanetSpace',
  components: { PlanetChip },
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
