<template>
  <span v-if="intro">
    Welkom op de portfoliowebsite van
    <strong>Anna Sivera van der Sluijs</strong>,
    <strong>Bianca van der Heide</strong>, <strong>Dylan Lemmers</strong> en
    <strong>Ruben de Wit</strong>. Maak een ruimtereis langs onze planeten en
    bekijk verschillende projecten.
    <br />
    <br />
  </span>
  <template v-if="$q.screen.gt.sm && intro">Maar eerst: m</template>
  <span v-if="$q.screen.gt.sm || !intro">
    <template v-if="!$q.screen.gt.sm && !intro">M</template>aak je eigen, unieke
    ruimteschip om door onze website te navigeren.
    <ol>
      <li>Gebruik de pijltjes(toetsen) om door vormen te bladeren.</li>
      <li>Klik op het ruimteschip om van kleur te veranderen.</li>
      <li>Kies vervolgens een buitenaards leuke naam.</li>
      <li>Begin je avontuur.</li>
    </ol>
    <br />

    <strong>Besturing</strong>
    <ul>
      <li>
        Door je muis te bewegen kun je je ruimteschip op de pagina verplaatsen
        en langs onze planeten reizen
      </li>
      <li>Klik op een planeet om te landen.</li>
      <li>
        Op elke persoonlijke planeet zijn drie verschillende projecten te
        bekijken.
      </li>
    </ul>
    <br />
    Veel plezier en pas op voor eventuele medereizigers.
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelpText',
  props: {
    intro: Boolean,
  },
});
</script>
