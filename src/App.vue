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

      const birthdays = ['-06-22', '-07-09', '-09-14', '<BIANCA>'];
      let isBirthday = false;
      let today = new Date().toISOString().split('T')[0];
      birthdays.forEach((date) =>
        today.includes(date) ? (isBirthday = true) : void 0
      );
      if (isBirthday) document.body.classList.add('birthday');
    });
  },
});
</script>
