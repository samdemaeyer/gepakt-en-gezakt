import React from 'react';
import NavBar from './components/NavBar';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';


class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      sections: [
        <Section1 key={0} id="section-1" />,
        <Section2 key={1} id="section-2" />,
        <Section1 key={2} id="section-1" />,
        <Section2 key={3} id="section-2" />
      ]
    }
  }

  componentDidMount() {
    let firstSection = document.getElementById(this.state.sections[0].props.id);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > firstSection.clientHeight) {
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
      </>
    );
  }
}

export default App;
