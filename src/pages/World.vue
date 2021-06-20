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
            <q-img
              fit="contain"
              :src="require(`../assets/planet/${name}.svg`)"
            />
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
<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const {
      params: { name },
    } = useRoute();
    const nameCaptialize = computed(() => {
      if (!name) return '';
      const value = name.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    return {
      name,
      nameCaptialize,
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
