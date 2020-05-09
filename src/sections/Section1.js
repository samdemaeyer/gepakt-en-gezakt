import React from 'react';
import './Section1.scss';

function Section1(props) {
  return (
    <div id={props.id}>
      <section className="bg-light section" id="scroll-section-1">
        <div className="section-left">
          <h2 className="section-title">Ik word geire gedragen.</h2>
          <article className="section-article">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nulla, ultrices in dapibus sed,
              imperdiet quis ante. Integer ac urna quis tortor tincidunt tempor ac ut elit. Integer eu tortor eget libero
              tempor hendrerit at a lacus. Integer id mollis ligula. Maecenas at eros ut leo venenatis dictum. Morbi nec
              blandit tellus, vitae lobortis velit. Phasellus arcu magna, blandit id aliquet in, cursus vel orci. Nam
              lacus ligula, elementum posuere pretium nec, porttitor ut risus. Nulla semper aliquet varius. Suspendisse at
              arcu pharetra felis mollis fermentum. Praesent ac quam justo. Praesent auctor nisl in turpis placerat
              malesuada.
            </p>
          </article>
        </div>
        <div className="img-right">
          <img src="/gepakt-en-gezakt/section-1/girl-holding-bag.png" alt="Girl olding a bag" />
        </div>
      </section>
      <section className="section bg-light img-wrapper">
        <img className="section-img-small" src="/gepakt-en-gezakt/section-1/bag.jpg" alt="bag"/>
        <img className="section-img-small" src="/gepakt-en-gezakt/section-1/girl-holding-bag-1.jpg" alt="girl holding bag"/>
        <img className="section-img-small" src="/gepakt-en-gezakt/section-1/girl-waring-bag.jpg" alt="girl waring bag on shoulder"/>
        <img className="section-img-small" src="/gepakt-en-gezakt/section-1/girl-holding-bag-2.jpg" alt="girl holding bag"/>
      </section>
    </div>
  );
}

export default Section1;
