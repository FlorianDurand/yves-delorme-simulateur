import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';


const Modal = (props) => (
  <div className={styles.modalContainer}>
    <div className={styles.modalOpacityBg} onClick={() => props.resetModal()} />
    {props.type === 'addedToCart' ? (
      <div className={styles.modal}>
        <div className={styles.greenText}>
          Ce lit a été ajouté au panier.
        </div>
        <div className={styles.groupButtons} >
          <button className={styles.buttonTop} onClick={() => props.resetModal()}>
            Continuer
          </button>
          <button className={styles.buttonBottom}>
            <img src="/static/cart.svg" alt="panier" />
            Accéder au panier
          </button>
        </div>
      </div>
      ) : null
    }
  </div>

);



export default Modal;
