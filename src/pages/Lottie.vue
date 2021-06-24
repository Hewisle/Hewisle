<template>
  <lottie-planet style="height: 20vh" space="country" name="ruben-ne" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="ruben-nw" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="ruben-south" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="anna-sw" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="anna-north" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="anna-ne" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="dylan-ne" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="dylan-south" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="dylan-nw" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="bianca-sw" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="bianca-north" autoplay/>
  <lottie-planet style="height: 20vh" space="country" name="bianca-east" autoplay/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LottiePlanet from 'src/components/Country.vue';

export default defineComponent({
  components: {
    LottiePlanet,
  }
});
</script>
