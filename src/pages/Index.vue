<template>
  <q-layout class="column items-center">
    <h1>Portfolio</h1>
    <div class="row q-mb-xl" syle="width: 80%">
      <div class="col q-mx-lg">
        <index-intro />
      </div>
      <div class="col q-mx-lg">
        <index-settings />
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import IndexIntro from 'src/components/IndexIntro.vue';
import IndexSettings from 'src/components/IndexSettings.vue';

export default defineComponent({
  components: { IndexIntro, IndexSettings },
  name: 'PageIndex'
});
</script>
