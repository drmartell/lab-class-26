import React from 'react';
import MapCharacters from './MapCharacters';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header /> 
        <MapCharacters />
        <Footer />
      </>
    );
  }
}

export default App;
