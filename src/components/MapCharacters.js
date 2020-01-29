import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import characters from '../characters';
import styles from './MapCharacters.css';

const charArray = characters.map(character =>
  <Character
    key={character.id}
    image={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}
    name={character.name}
    id={character.id}
    dateCreated={character.dateCreated}
    status={character.status}
    species={character.species}
    gender={character.gender}
    origin={character.origin}
    lastLocation={character.lastLocation}
  />
);

export default class MapCharacter extends Component {
  static propTypes = { 
    characters: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    return (
      <div className={styles.cardsContainer}>
        {charArray}
      </div>
    );
  }}
