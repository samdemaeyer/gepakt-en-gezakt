import React from 'react';
import './Footer.scss';

export default function Section5({ id }) {
  return (
    <footer className="bg-darker">
      <section className="container p-1 d-flex px-5">
        <div className="content">
          <a href="mailto:info@gepaktengezakt.com">info@gepaktengezakt.com</a>
        </div>
        <div className="content text-center">
          insta: <a href="#">gepaktengezakt</a>
        </div>
        <div className="content text-right">
          <a href="#">crowdfunding</a>
        </div>
      </section>
    </footer>
  );
}
