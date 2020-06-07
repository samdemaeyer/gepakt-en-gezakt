import React from 'react';
import './Section2.scss';

export default function Section2({ id }) {
  return (
    <div id={id}>
      <section id="scroll-section-2" className="p-2 pt-5 mt-2">
        <h2 className="title pb-1">Ik word geire gedragen.</h2>
        <div className="thumbs-wrapper d-flex">
          <img className="thumb" src="/gepakt-en-gezakt/section-1/bag.jpg" alt="bag" />
          <img className="thumb" src="/gepakt-en-gezakt/section-1/girl-holding-bag-1.jpg" alt="girl holding bag" />
          <img className="thumb" src="/gepakt-en-gezakt/section-1/girl-waring-bag.jpg" alt="girl waring bag" />
          <img className="thumb" src="/gepakt-en-gezakt/section-1/girl-holding-bag-2.jpg" alt="girl holding bag" />
        </div>
      </section>
    </div>
  );
};
