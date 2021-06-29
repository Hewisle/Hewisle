<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import updateFavicon from './utils/UpdateFavicon';

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {     
      let [spaceship] = document.getElementsByClassName(
        'spaceship-clone'
      ) as HTMLCollectionOf<CloneElement>;
      if (spaceship) updateFavicon(50, spaceship);

    });
  },
});
</script>
