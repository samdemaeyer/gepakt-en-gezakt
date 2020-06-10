import React from 'react';
import './Section2.scss';

export default function Section2({ id }) {
  return (
    <div id={id} className="scroll-section">
      <section className="bg-darker section">
        <div className="container d-flex">
          <h2 className="title p-1 text-center">
            Gepakt en gezakt
            <div className="pijl"></div>
          </h2>
          <article className="py-5 px-3 bg-light content-right d-flex">
            <p className="mr-2">
              Onze campagne, gepakt en gezakt bestaat uit het doel om een duurzaam state- ment te kunnen maken. Zo hebben
              we in deze campag- ne verschillende handige en milieuvriendelijke producten gemaakt. Deze campagne, ‘Gepakt
              en Gezakt’, bestaat uit verschillende onderdelen, met telkens als basis het oog om een duurzaam statement te
              kunnen maken. Zo kozen we ook voor een crowdfun- dingcampagne op te starten, waardoor we op voorhand weten
              hoeveel stuks we hier- van moeten laten produceren door Flagbag.
            </p>
            <p>
              Flagbag is een sociale twerk- stellingsorganisatie in Hasselt waar we na een bedrijfsbe- zoek volledig
              overtuigd waren van hun werkwijze en visie, welke in dezelfde lijn ligt als de onze.Flagbag doet aan
              ‘upcycling’ ‘cradle-to-crad- le‘ van afgedankte zeilen en vlaggen en maakt hiervan nieuwe producten. Doordat
              deze onderdelen gerecycled worden, wordt er ook telkens een uniek stuk geprodu- ceerd‘ een limited edition.
            </p>
          </article>
        </div>
      </section>
      <section className="container">
        <h2 className="py-5 title text-center">Chance, dat ge mij kunt wassen op 30 °C</h2>
        <article>
          <div className="bg-darker center-block">
            <h2 className="title-left">Waarom eigenlijk?</h2>
            <p className="content">
              Deels uit eigen ervaringen en ’struggles’ die we zelf hebben ervaren in onze zoektocht en tijdens
              gesprekken, waar- bij we heel vaak merken dat er veel mensen proberen hun steentje bij te dragen, maar niet
              weten waar te beginnen.
            </p>
            <p className="content">
              We krijgen hieromtrent veel vragen en beseffen dat er nood is aan verduidelijking. Hierbij willen we ons
              uiterste best doen om mensen hierin te begeleiden.
            </p>
            {/* <img className="img-right" src="/gepakt-en-gezakt/section-1/girl-holding-bag-1.jpg" alt="girl holding bag" /> */}
          </div>
        </article>
      </section>
    </div>
  );
}
