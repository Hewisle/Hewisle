<template>
  <q-layout class="q-pa-xl" style="min-height: 1px" id="scroll-x">
    <div class="row">
      <h2 class="q-mt-none q-ml-none">Dashboard voor VS Code</h2>
    </div>
    <div class="row q-gutter-lg no-wrap">
      <div class="col q-py-md" style="column-width: 41.6667%">
        <p>
          Al een tijdje voordat ik aan dit project begon had ik het idee om een
          extensie te maken voor Visual Studio Code (een zogeheten IDE ter
          ondersteuning van het programmeren). In dit programma miste ik een
          overzicht, iets als een dashboard of startpagina waar bijvoorbeeld
          projecten gepind en gecategoriseerd kunnen worden. Daarom wil ik mij
          binnen dit leerdoel inzetten om dit te realiseren. SPECIFIEKER: uitleg
          huidige werking? Van tevoren had ik al besloten om de extensie open
          source te maken en te publiceren op GitHub zodat gebruikers, die het
          probleem delen, ook van deze oplossing kunnen profiteren.
        </p>
        <h3 class="q-my-lg">Aanpak</h3>
        <p>
          Om deze vijf weken effectief te laten verlopen heb ik een grove
          planning gemaakt met daarin wanneer ik aan welke features zal gaan
          werken en waar bepaalde milestones staan. Hierna heb ik deze planning
          in een Kanban vorm gegoten zodat ik per week kan zien welke taak
          gelukt is en wat verschoven moet worden.
        </p>
        <p>
          Vervolgens ben ik begonnen aan een functioneel- en technisch plan
          waarin ik beschrijf welke technieken ik zal gaan gebruiken en globale
          wireframe schetsen van hoe de interface er uit komt te zien. Ik heb er
          voor gekozen om React met ChakraUI als frameworks te gebruiken. Met
          React had ik al enige ervaring, maar niet in combinatie met VS Code.
          De componenten-bibliotheek ChakraUI was wel nieuw voor mij en zag er
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
      </div>

    
        <h3 class="q-my-lg">Resultaat</h3>
        <p>
          Uiteindelijk heb ik een werkende VS Code extensie opgeleverd welke
          open source is opgezet en daarom te vinden op GITHUB.
        </p>
        <p>
          (Afb: Dashboard en menu) Middels drag-n-drop kunnen ingebouwde
          componenten naar het dashboard tabblad gesleept worden. Daar kan er
          vervolgens een titel en kleur aan gegeven worden. Daarnaast is het ook
          voor de gebruiker mogelijk om eigen componenten te ontwikkelen en deze
          weer te geven op het dashboard.
        </p>
        <p>
          Tijdens dit project ben ik lang wezen puzzelen hoe ik het beste
          user-content kon inladen in de extensie op een modulaire manier. Na
          een tijdje research op het internet kwam ik de vrij nieuwe techniek
          tegen van Webpack (innertijd nog in de bèta). In Webpack 5 zou
          namelijk de zogeheten Module Federation ondersteund worden. Met WMF is
          het mogelijk om externe modules in het hoofdproces te laden (runtime).
          Zo kan in dit geval een gebruiker in zijn AppData map een React
          component maken, deze compileren en klaarzetten. Vervolgens kan dit
          component direct gebruikt worden op het dashboard in mijn extensie.
        </p>
        <p>
          Als voorbeeld heb ik een analoge klok gemaakt als React component en
          deze op het dashboard geplaatst. (Afb: Klok)
        </p>
        <p>
          Omdat mijn project opgezet is als open source project, heb ik besloten
          om het publiek op te zoeken en aan te kondigen dat mijn extensie
          beschikbaar is. Zo heb ik op Dev.to een artikel geschreven en dit
          vervolgens gedeeld op Linkedin en Reddit. Hieruit kwamen een
          behoorlijk aantal weergaven (~1000) maar helaas bleef het
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
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
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
      x: Math.abs(x) > Math.abs(y) ? x : y,
    };
  }
}

export default defineComponent({
  setup() {
    onMounted(() => {
      Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
      const scrollbar = Scrollbar.init(
        document.querySelector('#scroll-x') as HTMLElement,
        {}
      );
      scrollbar.track.xAxis.element.remove();
      scrollbar.track.yAxis.element.remove();
    });
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
