import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Character extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    dateCreated: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    species: PropTypes.number.isRequired,
    gender: PropTypes.number.isRequired,
    origin: PropTypes.number.isRequired,
    lastLocation: PropTypes.number.isRequired
  }

  render() {
    const { name, id, dateCreated, status, species, gender, origin, lastLocation } = this.props;
    return (
      <>
        <ul>
          <li>{name}</li>
          <li>{id}</li>
          <li>{dateCreated}</li>
          <li>{status}</li>
          <li>{species}</li>
          <li>{gender}</li>
          <li>{origin}</li>
          <li>{lastLocation}</li>
        </ul>
      </>
    );
  }
}
