<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin text-black">
      <q-card-section class="row items-center">
        <h6 class="q-ma-none">Uitleg</h6>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <help-text />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar';
import HelpText from './HelpText.vue';

export default {
  emits: [...useDialogPluginComponent.emits],

  components: { HelpText },
  setup() {
    const { dialogRef, onDialogOK, onDialogHide } = useDialogPluginComponent();
    return {
      dialogRef,
      onDialogOK,
      onDialogHide
    };
  },
};
</script>
