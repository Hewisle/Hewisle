<template>
  <h2>Universele API Client</h2>

  <p>
    Omdat ik in het vorige blok erg tevreden was met het resultaat van een
    dashboard in VS Code wilde ik met die kennis een built-in
    <strong>
      <abbr title="Application Programming Interface">API</abbr>
      Client</strong
    >
    maken. Een API is een bepaalde vorm van hoe interfaces met elkaar
    communiceren. Met deze client zou het mogelijk zijn om verschillende soorten
    API’s te testen en hiervan het resultaat in te zien. <br />Deze oplossing
    bestaat als extensie gek genoeg alleen in een UI-arme vorm. Aangezien ik de
    basis voor een VS Code extensie in het vorige project al grotendeels heb
    opgezet, heb ik besloten om daarnaast gefundeerd onderzoek te doen naar
    verschillende <strong>programmeertalen- en frameworks</strong> waarmee API’s
    gemaakt kunnen worden.
  </p>
  <h3>Aanpak</h3>
  <p>
    Voor dit project ben ik begonnen met een planning waar de drie grootste
    doelen waren:
  </p>
  <ul>
    <li>
      Onderzoek naar populaire interfaces, protocollen en authenticatie<br />
      <em>(voor een beter beeld van waar de tester mee overweg moet kunnen)</em>
    </li>
    <li>
      Client extensie opzetten in VS Code<br />
      <em> (backends met simpele data om tester mee te testen)</em>
    </li>
    <li>
      Client extensie opzetten in VS Code<br />
      <em> (visuele interface waarmee API’s aangeroepen kunnen worden)</em>
    </li>
  </ul>

  <p>
    Dit heb ik verdeeld over de vijf weken om er vervolgens mee aan de slag te
    gaan. Voor de technische uitwerking van de API Client heb ik ook een snelle
    technische schets (<strong>wireframe</strong>) gemaakt in Axure 10 (bèta).
  </p>

  <figure>
    <q-img
      src="../../assets/content/ruben-nw-axure.png"
      fit="contain"
      class="no-break"
      style="height: 50vh"
    />
    <q-chip square>Wireframe</q-chip>
  </figure>

  <h3>Resultaat</h3>
  <p>
    Allereerst heb ik op basis van research de conclusie kunnen trekken dat de
    volgende talen en bijbehorende frameworks het meest populair zijn en/of het
    best presenteren:
  </p>
  <ul>
    <li>
      PHP
      <ul>
        <li>Laravel</li>
        <li>CakePHP</li>
      </ul>
    </li>

    <li>
      Python
      <ul>
        <li>Django</li>
        <li>Flask</li>
      </ul>
    </li>

    <li>
      NodeJS
      <ul>
        <li>ExpressJS</li>
      </ul>
    </li>
    <li>
      Java
      <ul>
        <li>Spring</li>
        <li>ActiveJ</li>
      </ul>
    </li>
    <li>
      .NET
      <ul>
        <li>ASP.NET Core</li>
      </ul>
    </li>
    <li>
      Go
      <ul>
        <li>Gearbox</li>
      </ul>
    </li>
    <li>
      Rust
      <ul>
        <li>Actix</li>
      </ul>
    </li>
  </ul>
  <p>
    De meeste van deze frameworks heb ik vervolgens gebruikt om daar een simpele
    web API in te maken, ter lering en vermaak (bij wijze van).
    <br />Wat betreft talen heb ik ook daar een (erg persoonlijke) conclusie uit
    kunnen trekken:
  </p>

  <q-markup-table>
    <thead>
      <tr>
        <th class="text-left"><strong>Taal</strong></th>
        <th class="text-left"><strong>Eerste gedachte vóór gebruik</strong></th>
        <th class="text-left">
          <strong>Mijn mening tijdens en na gebruik</strong>
        </th>
        <th class="text-left"><strong>Score</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>C</td>
        <td>Wordt veel gebruikt dus zou te doen moeten zijn.</td>
        <td>
          Het is te lezen, maar het schrijven vind ik niet altijd logisch.<br />De
          installatie is een nachtmerrie.
        </td>
        <td>4</td>
      </tr>
      <tr>
        <td>Rust</td>
        <td>Relatief nieuw, ziet er hip uit</td>
        <td>
          Installatie is top, lijkt op NodeJS, ingebouwde CLI helpt goed, syntax
          heeft wat weg van JS en C dus het is te doen
        </td>
        <td>8</td>
      </tr>
      <tr>
        <td>Go</td>
        <td>Gemaakt door Google dus zal wel goed zijn 🙂</td>
        <td>
          Verbazingwekkend compacte codebase, makkelijkste syntax ooit, fijn
          package management. Performance is een stuk beter dan NodeJS.
        </td>
        <td>9</td>
      </tr>
      <tr>
        <td>PHP</td>
        <td>Tsja mee gewerkt, tis oké</td>
        <td>
          PHP op zich is een goed lees- en schrijfbare taal. Laravel maakt er in
          mijn ogen echter een wirwar van waar echt een documentatie naast nodig
          is om de functie van bepaalde mappen te ontcijferen.
        </td>
        <td>6</td>
      </tr>
      <tr>
        <td>Python</td>
        <td>
          Ook weleens mee gewerkt, doet eigenlijk bijna altijd wat je verwacht.
        </td>
        <td>
          Een venv was nieuw voor mij, op het eerste gezicht vond ik dat wat
          omslachtig maar dat zal wennen zijn.<br />De effectieve codebase is
          lekker minimalistisch.
        </td>
        <td>7</td>
      </tr>
      <tr>
        <td>NodeJS</td>
        <td>Heb ik de meeste ervaring mee, dus lastig objectief te blijven</td>
        <td>
          De structuur van een JS project is voor mij zo logisch als ademen, ik
          kan mij niet voorstellen dat beginners hier moeite mee zouden hebben.
          Installatie gaat ook vlekkenloos. En tsja, de syntax spreekt voor
          zich.
        </td>
        <td>8</td>
      </tr>
      <tr>
        <td>Java</td>
        <td>
          Eh moet ik hier wel aan beginnen? Van wat ik er van gezien heb komt
          het over als log, veel dubbele declaraties en onzinnigheden.
        </td>
        <td>
          Die mappen structuur is een drama, vast handig voor grote projecten
          maar super onhandig voor bijvoorbeeld een prototype.<br />De syntax is
          oké maar ik kan er niet aan wennen dat elke zucht geïmporteerd moet
          worden. Het debuggen is traag (compilen duurt even).
        </td>
        <td>4</td>
      </tr>
    </tbody>
  </q-markup-table>

  <p class="do-break">
    De API Client die ik vervolgens heb gemaakt kon ik vervolgens testen met de
    eigen gemaakte Web API’s. De basisfunctionaliteit (een JSON GET request
    tonen) werkte goed op de manier hoe ik het voor ogen had. De broncode van de
    extensie is
    <a href="https://github.com/githrdw/vsc-simias" target="_blank">hier</a> te
    vinden
  </p>
  <figure>
    <q-img
      src="../../assets/content/ruben-nw-result.png"
      fit="contain"
      class="no-break"
    />
    <q-chip square>Mijn API Client extensie in sidebar</q-chip>
  </figure>
  <h3>Leereffecten</h3>
  <p>
    Beginnend met de extensie zelf; door omstandigheden is het uiteindelijk
    helaas geen UX/UI-genot geworden. Omdat ik al een goede basis had voor een
    VS Code extensie had ik verwacht dat het maken van deze API Client een stuk
    sneller zou gaan. Uiteindelijk heb ik te weinig tijd er aan kunnen besteden
    om het volwaardig op te kunnen leveren met de extra functies die ik voor
    ogen had (authenticatie, meerdere protocollen, etc.). Ikzelf was wel erg
    blij dat de basisfunctionaliteit goed werkte.
  </p>
  <p>
    Daarnaast heb ik uiteraard erg veel inzichten opgedaan van verschillende
    programmeertalen. Daar is in het dagelijks leven niet altijd tijd voor, dus
    het is fijn om daar binnen dit blok ruimte voor
  </p>

  <blockquote class="do-break">
    <em>
      Je hebt met dit project binnen de minor een uniek traject neergezet wat
      qua inhoud ook mijn kennis te boven gaat. Los van de deliverable heb je
      een uitgebreid onderzoek gedaan naar verschillende talen en frameworks wat
      in mijn opinie een uitstekende bron van kennis heeft opgeleverd. Je
      reflecteert hier tevens uitstekend op.
    </em>
  </blockquote>
</template>
