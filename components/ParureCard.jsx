import React from 'react';

import styles from './ParureCard.module.scss';


const ParureCard = props => (

  <div className={styles.parureCard}>
    <div className={styles.image}>
    <img src={props.parure.parurePreview} alt="Ma parure" />
      <div className={styles.icons}>
        <div className={styles.cart}>
          <img src="/static/icons/iconAddBasket.svg" alt="cart" />
        </div>
        <div className={styles.bin}>
          <img src="/static/icons/iconBin.svg" alt="bin" />
        </div>
      </div>
    </div>
    <div className={styles.saveBar}>
      <p>{props.parure.parureName}</p>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 29L24.2929 20.7071C24.6834 20.3166 24.6834 19.6834 24.2929 19.2929L16 11" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  </div>

);


export default ParureCard;
