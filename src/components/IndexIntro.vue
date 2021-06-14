<template>
  <q-card class="intro bg-transparent q-pa-lg">
    <q-card-section>
      Welkom op de portfoliowebsite van
      <strong>Anna Sivera van der Sluijs</strong>,
      <strong>Bianca van der Heide</strong>, <strong>Dylan Lemmers</strong> en
      <strong>Ruben de Wit</strong>. Maak een ruimtereis langs onze planeten en
      bekijk verschillende projecten.
      <br />
      <br />
      Maar eerst: maak je eigen, unieke ruimteschip om door onze website te
      navigeren. Klik of gebruik je pijltjes toetsen om door kleuren en vormen
      te bladeren. Kies vervolgens een buitenaards leuke naam en begin je
      avontuur.
      <br />
      <br />
      Door je muis te bewegen of door de pijltjes toetsen te gebruiken, kan je
      je ruimteschip op de pagina verplaatsen en langs onze planeten reizen.
      Klik op een planeet om te landen. Op elke persoonlijke planeet zijn drie
      verschillende projecten te bekijken. Veel plezier en pas op voor eventuele
      medereizigers.
    </q-card-section>
  </q-card>
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
  font-size: 1.21rem;
  max-width: 680px;
}
</style>
