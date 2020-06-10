import React from 'react';
import './Section4.scss';

export default function Section4({ id }) {
  return (
    <div id={id} className="scroll-section">
      <h2 className="secondary container">Aanbod</h2>
      <section className="bg-light img-wrapper">
        <div className="img-wrapper container pt-5 d-flex">
          <div className="img">
            <img src="/gepakt-en-gezakt/section-4/girl-holding-bag-1.jpg" alt="girl holding bag" />
          </div>
          <div className="img">
            <img src="/gepakt-en-gezakt/section-4/girl-holding-bag-2.jpg" alt="girl holding bag" />
          </div>
          <div className="img">
            <img src="/gepakt-en-gezakt/section-4/girl-holding-bag-3.jpg" alt="girl holding bag" />
          </div>
        </div>
      </section>
      <section className="content-wrapper">
        <div className="d-flex container">
          <div className="content mt-3">
            <h3 className="mb-1">Plooier</h3>
            <p>
              De ‘plooier' is een zak voor alle mensen die nog steeds figuurlijk ‘plooien’ voor de plastic zakjes in de
              winkel omdat ze er zo aan gehecht zijn. Deze zak, welke gemaakt is van gerecycleerde stoffen, kan je
              opplooien en wegstoppen in je rugzak, handtas of achterzak. Zo kan jij toch met een gerust hart de straat
              op ‘n op deze manier maak jij ook jouw statement duidelijk tegenover de plooiers.
            </p>
          </div>
          <div className="content mt-3">
            <h3 className="mb-1">Miszaksel</h3>
            <p>
              Onze ‘mis zaksel’ (niet te verwar- ren met ‘misbaksel’), is zowel een handige als stijlvolle tas.
              Tegenwoor- dig worden er veel ‘totebags’ uitge- deeld en zijn deze erg functioneel. Het enige minpunt aan
              de traditi- onele ‘tote bags’, is dat deze nooit waterdicht zijn, wat in België toch wel handig kan zijn.
              Daarom hebben we ons ‘mis zaksel’ zo gemaakt dat deze handige ‘tote bag’, welke bestaat uit gerecycleerde
              materia- len, eveneens waterdicht is.
            </p>
          </div>
          <div className="content mt-3">
            <h3 className="mb-1">Frakzak</h3>
            <p>
              De ‘Frakzak’ is niet voor niets de beste frak‘ Gemaakt van oude festi- valtentjes en in een handig
              formaat. Je komt nooit meer op een festival zonder een herbruikbare poncho die nog eens stijlvol is ook‘
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light p-3 mx-5 center-block">
        <div className="pijl"></div>
        <h2 className="secondary mb-2">Crowdfunding</h2>
        <p>
        Ben jij overtuigd?! en wil jij er eentje?
        </p>
        <p>
          Klik dan <a href="#" className="link">hier</a> voor onze funding!
        </p>
      </section>
    </div>
  );
}
