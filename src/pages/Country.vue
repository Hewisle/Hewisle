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
        <h2>VS Code dashboard</h2>
        <p>
          Al een tijdje voordat ik aan dit project begon had ik het idee om een
          extensie te maken voor
          <strong>Visual Studio Code</strong> (een zogeheten
          <abbr title="Integrated Development Environment">IDE</abbr> ter
          ondersteuning van het programmeren). In dit programma miste ik een
          overzicht, iets als een <strong>dashboard</strong> of startpagina waar
          bijvoorbeeld projecten gepind en gecategoriseerd kunnen worden. Daarom
          wil ik mij binnen dit leerdoel inzetten om dit te realiseren. Van
          tevoren had ik al besloten om de extensie
          <strong>open source</strong> te maken en te publiceren op GitHub zodat
          gebruikers, die het probleem delen, ook van deze oplossing kunnen
          profiteren.
        </p>
        <figure>
          <q-img
            src="../assets/content/ruben_ne_VSCode-Welkom.png"
            fit="contain"
          />
          <q-chip square>Standaard 'dashboard' van VS Code</q-chip>
        </figure>
        <h3 class="q-my-lg">Aanpak</h3>
        <p>
          Om deze vijf weken effectief te laten verlopen heb ik een grove
          planning gemaakt met daarin wanneer ik aan welke features zal gaan
          werken en waar bepaalde milestones staan. Hierna heb ik deze planning
          in een <strong>Kanban</strong> vorm gegoten zodat ik per week kan zien
          welke taak gelukt is en wat verschoven moet worden.
        </p>
        <p>
          Vervolgens ben ik begonnen aan een functioneel- en technisch plan
          waarin ik beschrijf welke technieken ik zal gaan gebruiken en globale
          wireframe schetsen van hoe de interface er uit komt te zien. Ik heb er
          voor gekozen om <strong>React</strong> met
          <strong>ChakraUI</strong> als frameworks te gebruiken. Met React had
          ik al enige ervaring, maar niet in combinatie met VS Code. De
          componenten-bibliotheek ChakraUI was wel nieuw voor mij en zag er
          veelbelovend uit. De meest recente projecten die ik met React had
          gedaan waren gebaseerd op het Material Design en dat had ik onderhand
          zo wel gezien.
        </p>
        <p>
          Na wat brainstormen en schetsen ben ik gekomen op het idee om een
          dashboard te maken waarop widgets geplaatst kunnen worden. Deze
          widgets kunnen door gebruikers zelf worden gemaakt, maar standaard
          zijn er een recente projecten-, gecategoriseerde lijst met projecten-
          en notite-widget beschikbaar.
        </p>

        <h3 class="q-my-lg">Resultaat</h3>
        <p>
          Uiteindelijk heb ik een werkende VS Code extensie opgeleverd welke
          open source is opgezet en daarom te vinden op GITHUB.
        </p>
        <p>
          (Afb: Dashboard en menu) Middels
          <strong>drag-n-drop</strong> kunnen ingebouwde componenten naar het
          dashboard tabblad gesleept worden. Daar kan er vervolgens een titel en
          kleur aan gegeven worden. Daarnaast is het ook voor de gebruiker
          mogelijk om eigen componenten te ontwikkelen en deze weer te geven op
          het dashboard.
        </p>
        <p>
          Tijdens dit project ben ik lang wezen puzzelen hoe ik het beste
          user-content kon inladen in de extensie op een modulaire manier. Na
          een tijdje research op het internet kwam ik de vrij nieuwe techniek
          tegen van Webpack. In
          <strong>Webpack 5</strong> (innertijd nog in de bèta) zou namelijk de
          zogeheten <strong>Module Federation</strong> ondersteund worden. Met
          WMF is het mogelijk om externe modules in het hoofdproces te laden
          (runtime). Zo kan in dit geval een gebruiker in zijn AppData map een
          React component maken, deze compileren en klaarzetten. Vervolgens kan
          dit component direct gebruikt worden op het dashboard in mijn
          extensie.
        </p>
        <p>
          Als voorbeeld heb ik een analoge klok gemaakt als React component en
          deze op het dashboard geplaatst. (Afb: Klok)
        </p>
        <p>
          Omdat mijn project opgezet is als open source project, heb ik besloten
          om het <strong>publiek</strong> op te zoeken en aan te kondigen dat
          mijn extensie beschikbaar is. Zo heb ik op Dev.to een artikel
          geschreven en dit vervolgens gedeeld op Linkedin en Reddit. Hieruit
          kwamen een behoorlijk aantal weergaven (~1000) maar helaas bleef het
          daadwerkelijk aantal downloads rond een tiental. Ook de reacties zijn
          op een hand te tellen.
        </p>
        <p>
          Desondanks ben ik trouwe gebruiker van mijn eigen extensie want ik
          gebruik het nog elke dag, om mijn werk-, hobby en schoolprojecten te
          ordenen. Deliverables die ik aan het begin heb gedefinieerd heb ik
          naar tevredenheid kunnen opleveren en daarmee heb ik ook het leerdoel
          gehaald.
        </p>
        <h3 class="q-my-lg">Leereffecten</h3>
        <p>
          Tijdens dit project heb ik naast het leerdoel best veel opgestoken. Zo
          heb ik ook gekeken naar voordelen van Web Components maar ondervond te
          veel nadelen om er mee door te gaan*. Daarvan heb ik geleerd dat niet
          elke nieuwe techniek alleen maar voordelen heeft. Daarnaast heb ik
          uiteraard ontzettend veel geleerd over de werking van VS Code onder de
          motorkap. Wat daar aan heeft bijgedragen is Typescript. Doordat veel
          van de broncode van VS Code getypeerd is met Typescript wordt het
          uitpluizen daarvan makkelijker. Van Typescript kom ik daardoor ook
          steeds meer te weten naast dat ik het heb gebruikt binnen dit project
          als taal. Webpack Module Federation was een pittige maar welkome
          oplossing op de wens die ik had. Het heeft even geduurd voordat ik
          begreep hoe Webpack mij kon helpen en welke voordelen het kon bieden,
          maar achteraf ben ik enorm fan. (Afb: logo’s gebruikte technieken)
        </p>
        <p>
          Ten slotte heb ik geleerd hoeveel moeite het kost om een open source
          project aan de man te brengen. Ikzelf ben natuurlijk enthousiast over
          mijn eigen project maar het is lastig om dat digitaal over te brengen
          (in het Engels). Ik had gehoopt op feedback of meer respons maar
          achteraf kan ik mezelf troosten met het enorme aantal weergaven van de
          blogposts.
        </p>
      </div>
    </horizontal-scroll>
    <div class="col col-2" :class="`${color}-variant`">
      <country class="fit" space="country" name="ruben-ne" autoplay />
      <!-- <object
        class="full-height"
        v-html="require('!!../assets/country/ruben-ne.svg?raw')"
      ></object> -->
    </div>
  </div>
</template>
<script>
import HorizontalScroll from 'src/components/HorizontalScroll.vue';
import Country from 'src/components/Planet.vue';
export default {
  components: { HorizontalScroll, Country },
  setup() {
    const color = 'orange';
    return { color };
  },
};
</script>
<style lang="scss" scoped>
$COLUMN_WIDTH: 500px;
$COLUMN_GAP: 200px;
h2 {
  position: relative;
  margin: 0;
}
h3,
figure {
  break-before: column;
}
figure {
  position: relative;
  margin: 1rem 0;
  max-height: 100%;
  max-width: $COLUMN_WIDTH;

  .q-img {
    border-radius: 6px;
  }

  .q-chip {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
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

  p {
    font-size: 1.25rem;
    line-height: 2.24rem;
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
