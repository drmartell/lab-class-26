import React from 'react';
import styles from './App.css';
import characters from '../characters';
import Character from './Character';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <ul>
        <li><a className={styles.active} href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Documentation</a></li>
      </ul>
    </nav>
    <section>
      <h1>The Rick And Morty Api</h1>
      <h2>Hey, did you ever want to hold a Terry fold?</h2>
    </section>
  </header>
);

const Footer = () => (
  <footer className={styles.Footer}>
    <section className={styles.stats}>
      <p>Characters: 493</p>
      <p>Locations: 76</p>
      <p>Episodes: 31</p>
    </section>
    <section className={styles.acknowledgment}>
      <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
    </section>
  </footer>
);

const characterComponents = characters.map(character => {
  return <Character
    key={character.id}
    name={character.name}
    id={character.id}
    dateCreated={character.dateCreated}
    status={character.status}
    species={character.species}
    gender={character.gender}
    origin={character.origin}
    lastLocation={character.lastLocation}
  />;
});

const App = () => (
  <React.Fragment>
    <Header />
    {characterComponents}
    <Footer />
  </React.Fragment>
);

export default App;
