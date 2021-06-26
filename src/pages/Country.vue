<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 723 281.9"
    class="custom-background"
    preserveAspectRatio="xMaxYMin slice"
  >
    <path
      transform="scale(1.2, .9) translate(0, -27.5)"
      :class="`${color}-variant`"
      d="M102 45L0 46v236h723V101c-26-13-87-26-172-35-119-14-280-21-449-21z"
    />
  </svg>
  <div class="column no-wrap">
    <header class="col col-1"></header>
    <horizontal-scroll
      :class="`${color}-variant`"
      class="col"
      style="padding-top: 0"
    >
      <div class="horizontal-row">
        <component :is="content" />
      </div>
    </horizontal-scroll>
    <div class="col col-2" :class="`${color}-variant`">
      <!-- <country
        class="fit"
        space="country"
        :name="`${name}-${countryCode}`"
        autoplay
      /> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

import HorizontalScroll from 'src/components/HorizontalScroll.vue';
import Country from 'src/components/Planet.vue';

const COUNTRIES: { [index: string]: string } = {
  'south-east': 'se',
  'south-west': 'sw',
  'north-east': 'ne',
};
export default {
  components: { HorizontalScroll, Country },
  setup() {
    const color = 'orange';
    const route = useRoute();

    const { name, country } = route.params;
    const countryCode: string = COUNTRIES[country as string];

    let content: unknown;
    if (name && countryCode) {
      content = defineAsyncComponent(() =>
        import(
          `../components/content/${name as string}-${countryCode}.vue`
        ).catch(() => null)
      );
    }

    return { color, content, name, countryCode };
  },
};
</script>
<style lang="scss" scoped>
$COLUMN_WIDTH: 500px;
$COLUMN_GAP: 200px;

.custom-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.column {
  height: 100vh;
  header {
    min-height: max(16vh, calc(86px + 2vw));
  }
}
.horizontal-row {
  flex-wrap: nowrap;
  column-width: $COLUMN_WIDTH;
  column-gap: $COLUMN_GAP;

  color: black;
  height: 100%;
  padding: 0 2rem;
  margin-right: 192px;

  &::v-deep() {
    h2 {
      position: relative;
      margin: 0;
    }
    h3,
    figure,
    iframe {
      break-before: column;
    }
    p {
      font-size: 1.25rem;
      line-height: 2.24rem;
    }

    iframe {
      height: 90%;
      width: 100%;
      display: block;
      border: 1px solid black;
      box-sizing: border-box;
      border-radius: 6px;
    }

    figure {
      max-width: $COLUMN_WIDTH;
    }

    figure,
    iframe {
      position: relative;
      margin: 1rem 0;
      max-height: 100%;

      .q-img {
        border-radius: 6px;
      }

      .q-chip {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
.red-variant {
  fill: $red-transparent;
  background: $red-transparent;
}
.cyan-variant {
  fill: $cyan-transparent;
  background: $cyan-transparent;
}
.yellow-variant {
  fill: $yellow-transparent;
  background: $yellow-transparent;
}
.orange-variant {
  fill: $orange-transparent;
  background: $orange-transparent;
}
</style>
