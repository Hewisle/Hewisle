<template>
  <q-layout class="column items-center">
    <h1>Portfolio</h1>
    <div class="row">
      <div class="col">
        <q-card class="intro bg-transparent" style="max-width: 520px;">
          <q-card-section>
            Welkom op de portfoliowebsite van
            <strong>Anna Sivera van der Sluijs</strong>,
            <strong>Bianca van der Heide</strong>,
            <strong>Dylan Lemmers</strong> en <strong>Ruben de Wit</strong>.
            Maak een ruimtereis langs onze planeten en bekijk verschillende
            projecten.
            <br />
            <br />
            Maar eerst: maak je eigen, unieke ruimteschip om door onze website
            te navigeren. Klik of gebruik je pijltjes toetsen om door kleuren en
            vormen te bladeren. Kies vervolgens een buitenaards leuke naam en
            begin je avontuur.
            <br />
            <br />
            Door je muis te bewegen of door de pijltjes toetsen te gebruiken,
            kan je je ruimteschip op de pagina verplaatsen en langs onze
            planeten reizen. Klik op een planeet om te landen. Op elke
            persoonlijke planeet zijn drie verschillende projecten te bekijken.
            Veel plezier en pas op voor eventuele medereizigers.
          </q-card-section>
        </q-card>
      </div>
      <div class="settings">
        <div class="settings--wrapper">
          <q-card>
            <q-img
              class="q-mt-xl"
              contain
              :src="require('../assets/rocket.svg')"
            ></q-img>
            <div class="column items-center q-mt-xl">
              <div class="col">
                <q-input
                  color="white"
                  v-model="name"
                  square
                  outlined
                  dark
                  label="Naam"
                ></q-input>
              </div>
              <div class="col q-mt-lg">
                <q-btn
                  to="/space"
                  push
                  size="xl"
                  color="yellow"
                  class="text-black"
                  :disabled="!name"
                >
                  Start
                </q-btn>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  data: () => ({
    name: ''
  })
});
</script>
<style lang="scss" scoped>
@keyframes float-in {
  0% {
    opacity: 0;
    transform: translateY(-5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-open {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.intro {
  line-height: 37.5px;
  opacity: 0;
  transform: translateY(-10%);
  animation: float-in 1s forwards;
}
.settings {
  position: relative;
  width: 0px;
  &--wrapper {
    width: 375px;
    height: 90%;
    top: 5%;
    overflow: hidden;
    position: absolute;
  }
  .q-card {
    position: absolute;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    transform: translate(-100%);
    animation: slide-open 1s forwards;
    animation-delay: 0.75s;

    .q-img {
      height: 146px;
    }
  }
}
</style>
