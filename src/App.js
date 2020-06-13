import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      sections: [
        <Section1 key={0} id="section-1" />,
        <Section2 key={1} id="section-2" />,
        <Section3 key={2} id="section-3" />,
        <Section4 key={3} id="section-4" />,
        <Section1 key={4} id="section-5" />,
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let lastSection = document.getElementById(this.state.sections[4].props.id)
      if (lastSection.getBoundingClientRect().top < 0) {
        window.scrollTo(0, 0);
      }
    });
  }

  render() {
    return (
      <>
        <NavBar />
        {this.state.sections}
        <Footer />
      </>
    );
  }
}

export default App;
