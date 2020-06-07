import React from 'react';
import './Section5.scss';

export default function Section5({ id }) {
  return (
    <div id={id} className="scroll-section">
      <div className="bg-darker">
        <section className="container p-1 d-flex">
          <div className="content">
            <a href="mailto:info@gepaktengezakt.com">info@gepaktengezakt.com</a>
          </div>
          <div className="content">
            insta: <a href="#">gepaktengezakt</a>
          </div>
          <div className="content">
            <a href="#">crowdfunding</a>
          </div>
        </section>
      </div>
    </div>
  );
}
