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
  <div class="custom-background--bottom" :class="`${color}-variant`"></div>
  <div class="column no-wrap">
    <header>
      <a
        :href="`/space/${name}`"
        class=""
        :title="nameCaptialize"
        :alt="nameCaptialize"
      >
        <q-img
          fit="contain"
          :src="require(`../assets/planet/${name}.svg`)"
          class="top-planet"
          position="right"
        />
      </a>
    </header>
    <horizontal-scroll class="col col-9 content-area">
      <div class="horizontal-row">
        <component :is="content" />
        <div class="horizontal-row--end"></div>
      </div>
    </horizontal-scroll>
    <div
      class="col col-2 absolute full-width background-helper"
      :class="`${color}-variant`"
    ></div>
    <div class="col col-2 absolute full-width animated-bottom">
      <plain-country
        v-if="name == 'bianca' && countryCode == 'east'"
        class="fit bianca-east--country"
        space="country"
        name="bianca-east"
      />
      <country
        v-else
        class="fit"
        space="country"
        :name="`${name}-${countryCode}`"
        autoplay
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import HorizontalScroll from 'src/components/HorizontalScroll.vue';
import Country from 'src/components/Planet.vue';
import PlainCountry from 'src/components/Country.vue';

const COUNTRIES: { [index: string]: string } = {
  'south-east': 'se',
  'south-west': 'sw',
  'north-east': 'ne',
  'north-west': 'nw',
  north: 'north',
  east: 'east',
  south: 'south',
};

const COLORS: { [index: string]: string } = {
  anna: 'red',
  dylan: 'yellow',
  bianca: 'cyan',
  ruben: 'orange',
};

export default {
  components: { HorizontalScroll, Country, PlainCountry },
  setup() {
    const route = useRoute();

    const { name, country } = route.params;
    const countryCode: string = COUNTRIES[country as string];
    const color: string = COLORS[name as string];

    const nameCaptialize = computed(() => {
      if (!name) return '';
      const value = name.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    let content: unknown;
    if (name && countryCode) {
      content = defineAsyncComponent(() =>
        import(
          `../components/content/${name as string}-${countryCode}.vue`
        ).catch(() => null)
      );
    }

    return { color, content, name, countryCode, nameCaptialize };
  },
};
</script>
<style lang="scss" scoped>
$COLUMN_WIDTH: 564px;
$COLUMN_GAP: 100px;
.custom-background {
  top: 0;
  height: 100%;
}
.custom-background--bottom {
  top: 50vh;
  height: 50vh;
}
.custom-background,
.custom-background--bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
}
.background-helper {
  bottom: 0;

  @media screen and (max-width: $breakpoint-sm-min) {
    display: none;
  }
}
.column {
  height: 100vh;

  .content-area {
    top: max(15vh, calc(86px + 2vw));
  }
  header {
    position: absolute;
    width: 100%;
    height: max(16vh, calc(86px + 2vw));

    .top-planet {
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateY(-25%);
      transform-origin: right;
      transition: transform 1s;

      &:hover {
        transform: translateY(-25%) scale(1.2);
      }
    }
  }
}
.horizontal-row {
  flex-wrap: nowrap;

  color: black;
  height: 100%;

  @media screen and (min-width: $breakpoint-md-min) {
    column-width: $COLUMN_WIDTH;
    column-gap: $COLUMN_GAP;
    width: $COLUMN_WIDTH;
    padding: 4rem 2rem 0 2rem;
    margin-right: 192px;
    margin-top: -2rem;
  }

  &--end {
    break-before: column;
    width: $COLUMN_WIDTH;
    height: 100%;
  }

  &::v-deep() {
    h2 {
      position: relative;
      margin: 0;
      margin-top: -2.7rem;
      margin-bottom: 0.75rem;
      @media screen and (max-width: $breakpoint-md-min) {
        margin-top: 0;
      }
    }
    h3 {
      position: relative;
      margin: 0;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
    h3,
    figure,
    iframe {
      &:not(.no-break) {
        break-before: column;
      }
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
.animated-bottom {
  bottom: 0;
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
