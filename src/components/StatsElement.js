import React, { Component } from 'react';
import styles from './Character.css';
import PropTypes from 'prop-types';

export default class StatsElement extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };
  
  render() {
    const { title, description } = this.props;

    return (
      <>
        <div className={styles.statItem}>
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </>
    );
  }
}
