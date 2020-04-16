import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Modal.module.scss';
import { useSelector, useDispatch } from 'react-redux'

const useSave = () => {
  const parure = useSelector(state => state.parure)
  const dispatch = useDispatch()
  const saveParure = myParure =>
    dispatch({
      type: 'saveParure',
      parure : myParure
    })
  return { parure, saveParure }
}

const Modal = (props) => {
  const { parure, saveParure } = useSave()

  const save = myParure => {
    if (myParure) {
    const index = parure.findIndex((e) => e.parureId === myParure.parureId);
    var parures;
    if (index === -1) {
      parure.push(myParure);
      parures = parure;
    } else {
        parure[index] = myParure;
        parures = parure;
    }
    // console.log(parures)
    // console.log(index)
    // console.log(myParure)
    saveParure(parures);
    // const parures = parure.includes(myParure) ? parure : parure.push(myParure);
    // saveParure(parures);
    }
  }

  return(
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
          <button type="button" className={styles.buttonBottom} onClick={() => {props.resetModal(), console.log(parure)}}>
            Retour
          </button>
          <Link href="/collection">
            <button type="button" className={styles.buttonTop} onClick={() => {save(props.myParure), console.log(props.myParure)}}>
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
};

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  resetModal: PropTypes.func.isRequired,
};

export default Modal;
