import React from 'react';
import './Section3.scss';

export default function Section3({ id }) {
  return (
    <div id={id} className="scroll-section">
      <h2 className="container">'t process</h2>
      <section className="row container">
        <div className="block bg-light">
          <p>1. Flagbag verzamelt achtergelaten tenten op festivals.</p>
          <div className="tenten"></div>
          <div className="pijl-rechts block-1"></div>
        </div>
        <div className="block">
          <p>
            2. Bruikbare tenten worden opnieuw verkocht en de afgedankte
            materialen worden geselecteerd voor hergebruik.
          </p>
        </div>
        <div className="block">
          <p>3. Samen met Flagbag bekijken we de ontwerpmogelijkheden.</p>
          <div className="tassen-en-poncho"></div>
          <div className="pijl block-3"></div>
        </div>
      </section>
      <section className="row container">
        <div className="block">
          <p>
            4. Via onze crowdfunding bieden we verschillende opties aan aan de
            koper.
          </p>
          <div className="ulule"></div>
          <div className="pijl-rechts-beneden"></div>
        </div>
        <div className="block bg-light">
          <p>
            5. Enkel wat besteld wordt, wordt in productie gebracht. De
            producten zijn dus limited edition.
          </p>
          <div className="naaimachine"></div>
        </div>
        <div className="block bg-light">
          <p>
            6. In het naaiatelier van Flagbag worden mensen via een sociale
            tewerkstelling te werk gesteld.
          </p>
        </div>
      </section>
      <section className="row container">
        <div className="block bg-darker">
          <p>
            7. Zij naaien de producten met gerecycleerd materiaal en worden
            hiervoor eerlijk vergoed.
          </p>
          <div className="pijl-rechts"></div>
        </div>
        <div className="block">
          <p>8. Alle bestellingen worden verzonden en er is geen overschot.</p>
        </div>
        <div className="block bg-darker">
          <p>9. Jij gelukkig, wij gelukkig!</p>
          <div className="pijl"></div>
        </div>
      </section>
      <section className="bg-light p-3 mx-5 center-block">
        <h2 className="secondary mb-2">Recycling</h2>
        <p>
          Recycling is niet hetzelfde als iets hergebruiken. Als er iets
          gerecycled wordt, dan wordt het product opnieuw gebruikt om er iets
          anders mee te maken. Wij recyclen tentstof en luchtballonstof en maken
          er tassen en poncho’s van. Dit doen we omdat er in de natuur geen
          afval bestaat, afval is namelijk een menselijk concept. De natuur
          creëert niets dat door hetzelfde systeem kan worden gerecupereerd. Met
          onze campagne willen we graag gesprekken starten met mensen die we met
          dit concept kunnen in aanraking laten komen en overtuigen. We willen
          anderen overtuigen dat elk product ook zijn waarde heeft en je heel
          veel ‘afval’ kan recyclen en het een tweede of derde leven kan geven.
          We willen graag dat mensen hierdoor geïnspireerd geraken.
        </p>
      </section>
    </div>
  );
}
