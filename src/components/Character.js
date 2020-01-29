import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatsElement from './StatsElement';
import styles from './Character.css';

export default class Character extends Component {
   static propTypes = {
     name: PropTypes.string.isRequired,
     id: PropTypes.number.isRequired,
     dateCreated: PropTypes.string.isRequired,
     status: PropTypes.string.isRequired,
     species: PropTypes.string.isRequired,
     gender: PropTypes.string.isRequired,
     origin: PropTypes.string.isRequired,
     lastLocation: PropTypes.string.isRequired,
     image: PropTypes.string.isRequired
   };
   render() {
     const { name, id, dateCreated, status, species, gender, origin, lastLocation, image } = this.props;
  
     return (
       <>
         <div className={styles.card}>
           <div><img src={image}></img></div>
           <div className={styles.banner}>
             <div id={styles.charname}>{name}</div>
             <div id={styles.bannerSub}><div id={styles.textId}>id: {id}</div><div>{dateCreated}</div></div>
           </div>
 
           <div className={styles.charstats}>
             <StatsElement
               title='STATUS'
               description={status} />
             <StatsElement
               title='SPECIES'
               description={species} />
             <StatsElement
               title='GENDER'
               description={gender} />
             <StatsElement
               title='ORIGIN'
               description={origin} />
             <StatsElement
               title='LAST LOCATION'
               description={lastLocation} />
           </div>
         </div>
       </>
     );
   }
}
