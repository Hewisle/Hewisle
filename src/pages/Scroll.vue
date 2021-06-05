<template>
  <q-layout class="q-pa-xl" style="min-height: 1px">
    <div class="row">
      <h2 class="q-mt-none">Titel leerdoel</h2>
    </div>
    <div class="row q-gutter-lg no-wrap">
      <div class="col col-5 q-py-md">
        <h3 class="q-my-lg">Kopje 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
          orci ut faucibus sed purus venenatis ultricies amet, iaculis. Senectus
          commodo quis lectus ut. Tellus urna et, amet lectus adipiscing
          pellentesque egestas. Ornare lorem gravida placerat ipsum. Fusce purus
          commodo gravida elementum nunc adipiscing nisi, sollicitudin. Id
          ornare aliquam in dis tortor. Dis suspendisse sed congue ornare. Sed
          netus erat amet nullam erat mattis nibh. Nunc, viverra vulputate
          libero quis mauris fames sed at. Tincidunt platea lectus eget amet
          iaculis et dictumst consectetur quam. Pulvinar enim imperdiet
          facilisis pulvinar. Sed netus erat amet nullam erat mattis nibh. Nunc,
          viverra vulputate libero quis mauris fames sed at. Tincidunt platea
          lectus eget amet iaculis et dictumst consectetur quam. Pulvinar enim
          imperdiet facilisis pulvinar.
        </p>
      </div>
      <div class="col col-5 q-pa-md">
        <q-img src="https://placeimg.com/500/300/nature" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
          orci ut faucibus sed purus venenatis ultricies amet, iaculis. Senectus
          commodo quis lectus ut. Tellus urna et, amet lectus adipiscing
          pellentesque egestas. Ornare lorem gravida placerat ipsum. Fusce purus
          commodo gravida elementum nunc adipiscing nisi, sollicitudin. Id
          ornare aliquam in dis tortor. Dis suspendisse sed congue ornare. Sed
          netus erat amet nullam erat mattis nibh. Nunc, viverra vulputate
        </p>
      </div>
      <div class="col col-5 q-pa-md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
          orci ut faucibus sed purus venenatis ultricies amet, iaculis. Senectus
          commodo quis lectus ut. Tellus urna et, amet lectus adipiscing
          pellentesque egestas. Ornare lorem gravida placerat ipsum.
        </p>
        <q-img src="https://placeimg.com/500/300/nature" />
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import gsap from 'gsap';

interface ScrollEvent extends Event {
  deltaY: number;
  wheelDelta: number;
  detail: number;
}

const scrollHorizontally = (e: ScrollEvent) => {
  if (e.type != 'wheel') return;
  let delta = (e.deltaY || -e.wheelDelta || e.detail || 1) * 0.75;
  document.documentElement.scrollLeft += delta;
  document.body.scrollLeft += delta;
  e.preventDefault();
};

export default defineComponent({
  mounted() {
    document.addEventListener('wheel', scrollHorizontally as EventListener, {
      passive: false
    });
  },
  onBeforeUnmount() {
    document.removeEventListener('wheel', scrollHorizontally as EventListener);
  }
});
</script>

<style lang="scss" scoped>
.q-img {
  margin-bottom: 16px;
}
</style>
