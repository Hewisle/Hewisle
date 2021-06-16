<template>
  <q-layout class="q-pa-xl" style="min-height: 1px" id="scroll-x">
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
import { defineComponent, onMounted} from 'vue';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/dist/plugins/overscroll';
// import gsap from 'gsap';

class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll';
  transformDelta(delta: { x: number; y: number }, fromEvent: Event) {
    if (!/wheel/.test(fromEvent.type)) return delta;
    const { x, y } = delta;
    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y
    };
  }
}

export default defineComponent({
  setup () {
    onMounted(() => {
      Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
      const scrollbar = Scrollbar.init(
        document.querySelector('#scroll-x') as HTMLElement,
        {}
      );
      scrollbar.track.xAxis.element.remove();
      scrollbar.track.yAxis.element.remove();
    })
  },
});
</script>

<style lang="scss" scoped>
.q-img {
  margin-bottom: 16px;
}
#scroll-x {
  overflow: hidden;
}
</style>
