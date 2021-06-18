<template>
  <div class="intro">
    <q-card-section>
      Welkom op de portfoliowebsite van Anna Sivera van der Sluijs, Bianca van
      der Heide, Dylan Lemmers en Ruben de Wit. Maak een ruimtereis langs onze
      planeten en bekijk verschillende projecten.
      <br />
      <br />
      <template v-if="$q.screen.gt.sm">
        Maar eerst: maak je eigen, unieke ruimteschip om door onze website te
        navigeren.
        <ol>
          <li>Gebruik de pijltjes(toetsen) om door vormen te bladeren.</li>
          <li>Klik op het ruimteschip om van kleur te veranderen.</li>
          <li>Kies vervolgens een buitenaards leuke naam.</li>
          <li>Begin je avontuur.</li>
        </ol>
        <br />

        <strong> Besturing</strong>
        <ul>
          <li>
            Door je muis te bewegen of door de pijltjes toetsen te gebruiken,
            kun je je ruimteschip op de pagina verplaatsen en langs onze
            planeten reizen.
          </li>
          <li>Klik op een planeet om te landen.</li>
          <li>
            Op elke persoonlijke planeet zijn drie verschillende projecten te
            bekijken.
          </li>
        </ul>
        <br />
        Veel plezier en pas op voor eventuele medereizigers.
      </template>
    </q-card-section>
  </div>
</template>

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
.intro {
  line-height: 37.5px;
  opacity: 0;
  transform: translateY(-10%);
  animation: float-in 1s forwards;
  font-size: 1.2rem;

  ul,
  ol {
    margin: 0;
  }
}
</style>
