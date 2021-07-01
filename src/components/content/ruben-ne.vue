<template>
  <h2>VS Code dashboard</h2>
  <p>
    Al een tijdje voordat ik aan dit project begon had ik het idee om een
    extensie te maken voor
    <strong>Visual Studio Code</strong> (een zogeheten
    <abbr title="Integrated Development Environment">IDE</abbr> ter
    ondersteuning van het programmeren). In dit programma miste ik een
    overzicht, iets als een <strong>dashboard</strong> of startpagina waar
    bijvoorbeeld projecten gepind en gecategoriseerd kunnen worden. Daarom wil
    ik mij binnen dit leerdoel inzetten om dit te realiseren. Van tevoren had ik
    al besloten om de extensie <strong>open source</strong> te maken en te
    publiceren op GitHub zodat gebruikers, die het probleem delen, ook van deze
    oplossing kunnen profiteren.
  </p>
  <figure>
    <q-img
      src="../../assets/content/ruben_ne_VSCode-Welkom.png"
      fit="contain"
    />
    <q-chip square>Standaard 'dashboard' van VS Code</q-chip>
  </figure>
  <h3>Aanpak</h3>
  <p>
    Om deze vijf weken effectief te laten verlopen heb ik een grove planning
    gemaakt met daarin wanneer ik aan welke features zal gaan werken en waar
    bepaalde milestones staan. Hierna heb ik deze planning in een
    <strong>Kanban</strong> vorm gegoten zodat ik per week kan zien welke taak
    gelukt is en wat verschoven moet worden.
  </p>
  <p>
    Vervolgens ben ik begonnen aan een functioneel- en technisch plan waarin ik
    beschrijf welke technieken ik zal gaan gebruiken en globale wireframe
    schetsen van hoe de interface er uit komt te zien. Ik heb er voor gekozen om
    <strong>React</strong> met <strong>ChakraUI</strong> als frameworks te
    gebruiken. Met React had ik al enige ervaring, maar niet in combinatie met
    VS Code. De componenten-bibliotheek ChakraUI was wel nieuw voor mij en zag
    er veelbelovend uit. De meest recente projecten die ik met React had gedaan
    waren gebaseerd op het Material Design en dat had ik onderhand zo wel
    gezien.
  </p>
  <p>
    Na wat brainstormen en schetsen ben ik gekomen op het idee om een dashboard
    te maken waarop widgets geplaatst kunnen worden. Deze widgets kunnen door
    gebruikers zelf worden gemaakt, maar standaard zijn er een recente
    projecten-, gecategoriseerde lijst met projecten- en notite-widget
    beschikbaar.
  </p>

  <h3 class="q-my-lg">Resultaat</h3>
  <p>
    Uiteindelijk heb ik een werkende VS Code extensie opgeleverd welke open
    source is opgezet en daarom te vinden op GITHUB.
  </p>
  <figure class="no-break">
    <q-img src="../../assets/content/ruben_ne_dashboard-result.png"></q-img>
  </figure>
  <p>
    Middels
    <strong>drag-n-drop</strong> kunnen ingebouwde componenten naar het
    dashboard tabblad gesleept worden. Daar kan er vervolgens een titel en kleur
    aan gegeven worden. Daarnaast is het ook voor de gebruiker mogelijk om eigen
    componenten te ontwikkelen en deze weer te geven op het dashboard.
  </p>
  <p>
    Tijdens dit project ben ik lang wezen puzzelen hoe ik het beste user-content
    kon inladen in de extensie op een modulaire manier. Na een tijdje research
    op het internet kwam ik de vrij nieuwe techniek tegen van Webpack. In
    <strong>Webpack 5</strong> (innertijd nog in de bèta) zou namelijk de
    zogeheten <strong>Module Federation</strong> ondersteund worden. Met WMF is
    het mogelijk om externe modules in het hoofdproces te laden (runtime). Zo
    kan in dit geval een gebruiker in zijn AppData map een React component
    maken, deze compileren en klaarzetten. Vervolgens kan dit component direct
    gebruikt worden op het dashboard in mijn extensie.
  </p>
  <p>
    Als voorbeeld heb ik een analoge klok gemaakt als React component en deze op
    het dashboard geplaatst.
  </p>
  <figure class="no-break">
    <q-img src="../../assets/content/ruben-ne-dashboard.png"></q-img>
  </figure>
  <p>
    Omdat mijn project opgezet is als open source project, heb ik besloten om
    het <strong>publiek</strong> op te zoeken en aan te kondigen dat mijn
    extensie beschikbaar is. Zo heb ik op Dev.to een artikel geschreven en dit
    vervolgens gedeeld op Linkedin en Reddit. Hieruit kwamen een behoorlijk
    aantal weergaven (~1000) maar helaas bleef het daadwerkelijk aantal
    downloads rond een tiental. Ook de reacties zijn op een hand te tellen.
  </p>
  <p>
    Desondanks ben ik trouwe gebruiker van mijn eigen extensie want ik gebruik
    het nog elke dag, om mijn werk-, hobby en schoolprojecten te ordenen.
    Deliverables die ik aan het begin heb gedefinieerd heb ik naar tevredenheid
    kunnen opleveren en daarmee heb ik ook het leerdoel gehaald.
  </p>
  <h3 class="q-my-lg">Leereffecten</h3>
  <p>
    Tijdens dit project heb ik naast het leerdoel best veel opgestoken. Zo heb
    ik ook gekeken naar voordelen van Web Components maar ondervond te veel
    nadelen om er mee door te gaan*. Daarvan heb ik geleerd dat niet elke nieuwe
    techniek alleen maar voordelen heeft. Daarnaast heb ik uiteraard ontzettend
    veel geleerd over de werking van VS Code onder de motorkap. Wat daar aan
    heeft bijgedragen is Typescript. Doordat veel van de broncode van VS Code
    getypeerd is met Typescript wordt het uitpluizen daarvan makkelijker. Van
    Typescript kom ik daardoor ook steeds meer te weten naast dat ik het heb
    gebruikt binnen dit project als taal. Webpack Module Federation was een
    pittige maar welkome oplossing op de wens die ik had. Het heeft even geduurd
    voordat ik begreep hoe Webpack mij kon helpen en welke voordelen het kon
    bieden, maar achteraf ben ik enorm fan.
  </p>
  <p>
    Ten slotte heb ik geleerd hoeveel moeite het kost om een open source project
    aan de man te brengen. Ikzelf ben natuurlijk enthousiast over mijn eigen
    project maar het is lastig om dat digitaal over te brengen (in het Engels).
    Ik had gehoopt op feedback of meer respons maar achteraf kan ik mezelf
    troosten met het enorme aantal weergaven van de blogposts.
  </p>
</template>
