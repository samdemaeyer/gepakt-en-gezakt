import React from 'react';
import './Section1.scss';

export default function Section1({ id }) {
  return (
    <div id={id}>
      <section className="container p-5" id="scroll-section-1">
        <div className="thumbs-wrapper">
          <img className="thumb" src="/gepakt-en-gezakt/section-1/tents-1.jpg" alt="tents-1" />
          <img className="thumb" src="/gepakt-en-gezakt/section-1/tents-2.jpg" alt="tents-2" />
          <img className="thumb" src="/gepakt-en-gezakt/section-1/tents-3.jpg" alt="tents-3" />
        </div>
        <img src="/gepakt-en-gezakt/section-1/tents-big.jpg" alt="tents big" />
        <h2 className="title pt-1 mb-0">
          Draag jij volgend jaar
          <br />
          een achtergelaten tentje?
        </h2>
      </section>
      <div className="bg-darker">
        <section className="container">
          <article className="p-5 d-flex">
            <p className="content">
              In de ideale wereld zou de oplossing natuurlijk zijn dat er geen zwerfvuil meer wordt achter- gelaten op
              festivaltereinen en dat iedereen zijn afval achterlaat in de voorziene vuilbakken en zijn
              kampeermaterialen het jaar erop opnieuw zou gebruiken.
            </p>
            <p className="content">
              Maar wat met de achtergelaten tenten of als deze stuk gegaan zijn. Wij gingen hiervoor op zoek naar een
              alternatief en gingen deze recy- cleren. Recycleren is niet de grote oplossing. Het is enkel een brug naar
              afvalvermindering. We sloegen de handen in elkaar met Flagbag.
            </p>
          </article>
        </section>
        <section className="py-5 d-flex container">
          <div className="content-left">
            <h2 className="p-5 title text-center">1 op 4 laat hun tent achter op festivalweides</h2>
            <article className="p-3 mt-3 bg-light">
              <p>
                Wij zijn Gepakt en Gezakt en voeren een sensibilise- ringscampagne rond plastic, meerbepaald het
                plasticafval op festivals. Via deze campagne proberen we festivalgan- gers aan te sporen om zelf deel uit
                te maken van één van de zovele oplossingen van sluikstort op de festivalterreinen en op de manier kan elk
                zijn eigen steentje bijdragen.
              </p>
              <p className="mb-0">
                Zelf zijn wij, Carla-Reina Cochez en Dorina Verdyck, twee master studenten aan Sint Lucas Antwerpen in de
                richting beeldende kunsten in socio-politieke context en medeo- prichters van het collectief Trashwerp. En
                willen jullie graag betrekken in onze zoektocht naar een betere toekomst.
              </p>
            </article>
          </div>
          <div className="img-wrapper">
            <img src="/gepakt-en-gezakt/section-1/girl-holding-bag.png" alt="Girl olding a bag" />
          </div>
        </section>
      </div>
    </div>
  );
};
