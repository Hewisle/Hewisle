<template>
  <q-layout>
    <div class="background"></div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout'
});
</script>
<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3CradialGradient id='a' cx='40%25' cy='52%25' r='70%25' gradientTransform='translate(.018 -.1) skewX(-10)'%3E%3Cstop stop-color='%23101033' offset='0'/%3E%3Cstop stop-color='%232F1B3F' offset='35%25'/%3E%3Cstop stop-color='%23101033' offset='75%25'/%3E%3Cstop stop-color='%23101033' offset='100%25'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)' transform='scale(1.2)'/%3E%3C/svg%3E");
}
.q-page-container::v-deep() .q-page {
  transition: min-height 0.5s ease 0s;
}
</style>
