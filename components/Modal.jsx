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
        <div className={styles.groupButtonsColumn} >
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
    };

    {props.type === 'unlogged' ? (
      <div className={styles.modal}>
        <div className={styles.basicText}>
        Pour <span>créer une séléction de parures</span> ou en retrouver une déjà existante, veuillez entrer votre e-mail.
        </div>
        <div className={styles.mail}>
          <div className={styles.mailLabel}>E-mail</div>
          <input type="email" name="" id="" placeholder="exemple@gmail.com" className={styles.mailInput} />
        </div>
        <div className={styles.groupButtonsRow} >
          <button className={styles.buttonBottom} onClick={() => props.resetModal()}>
            Retour
          </button>
          <button className={styles.buttonTop} onClick={() => props.resetModal()}>
            <img src="/static/save.svg" alt="Valider" />
            Valider
          </button>
        </div>
      </div>
      ) : null
    };

  </div>

);



export default Modal;
