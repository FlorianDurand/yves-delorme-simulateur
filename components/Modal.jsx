import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Modal.module.scss';


const Modal = (props) => (

  <div className={styles.modalContainer}>
    <div className={styles.modalOpacityBg} onClick={() => props.resetModal()} />

    {props.type === 'addedToCart' ? (
      <div className={styles.modal}>
        <div className={styles.greenText}>
          Ce lit a été ajouté au panier.
        </div>
        <div className={styles.groupButtonsColumn}>
          <button type="button" className={styles.buttonTop} onClick={() => props.resetModal()}>
            Continuer
          </button>
          <button type="button" className={styles.buttonBottom}>
            <img src="/static/cart.svg" alt="panier" />
            Accéder au panier
          </button>
        </div>
      </div>
    ) : null}
    ;

    {props.type === 'unlogged' ? (
      <div className={styles.modal}>
        <div className={styles.basicText}>
          Pour
          {' '}
          <span>créer une séléction de parures</span>
          {' '}
          ou en retrouver une déjà existante, veuillez entrer votre e-mail.
        </div>
        <div className={styles.mail}>
          <div className={styles.mailLabel}>E-mail</div>
          <input type="email" name="" id="" placeholder="exemple@gmail.com" className={styles.mailInput} />
        </div>
        <div className={styles.groupButtonsRow}>
          <button type="button" className={styles.buttonBottom} onClick={() => props.resetModal()}>
            Retour
          </button>
          <Link href="/collection">
            <button type="button" className={styles.buttonTop}>
              <img src="/static/save.svg" alt="Valider" />
              Valider
            </button>
          </Link>
        </div>
      </div>
    ) : null}
    ;

  </div>

);

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  resetModal: PropTypes.func.isRequired,
};

export default Modal;
