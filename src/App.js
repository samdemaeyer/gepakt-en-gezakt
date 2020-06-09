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
      ]
    }
  }

  componentDidMount() {
    let firstSection = document.getElementById(this.state.sections[0].props.id);
    const menuHeight = document.getElementById('nav-bar').getBoundingClientRect().height;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > (firstSection.clientHeight + menuHeight)) {
        const firstSectionFromArray = this.state.sections.shift();
        this.setState({ sections: [...this.state.sections, firstSectionFromArray] });
        firstSection = document.getElementById(this.state.sections[0].props.id);
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
