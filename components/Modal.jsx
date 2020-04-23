import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Modal.module.scss';

const useSave = () => {
  const parures = useSelector((state) => state.parures);
  const activeParure = useSelector((state) => state.activeParure);
  const dispatch = useDispatch();
  const saveParure = (myParure) => dispatch({
    type: 'saveParure',
    parures: myParure,
  });
  const setActiveParure = (parureContent) => dispatch({
    type: 'activeParure',
    activeParure: parureContent,
  });
  return {
    parures, saveParure, setActiveParure, activeParure,
  };
};

const Modal = (props) => {
  const [email, setEmail] = useState();
  const [parureName, setParureName] = useState();
  const [popModal, setPopModal] = useState();
  const { myParure } = props;

  // Ajoute le nom de la parure renseigné par le client
  useEffect(() => {
    myParure.parureName = parureName;
  }, [parureName]);

  useEffect(() => {
    props.popModal(popModal);
  }, [popModal]);

  // Recupère les variables globales
  const {
    parures, saveParure, setActiveParure, activeParure,
  } = useSave();

  const defaultValueName = activeParure.parureName;


  // Sauvegarde la parure dans un state global (via redux), mais avant regarde si l'id de la parure n'est pas déjà éxistant et dans ce cas, update la parure existante dans le state global
  const save = (myParure) => {
    if (myParure) {
      const index = parures.findIndex((e) => e.parureId === myParure.parureId);
      let paruresToSave;
      if (index === -1) {
        parures.push(myParure);
        paruresToSave = parures;
      } else {
        parures[index] = myParure;
        paruresToSave = parures;
      }
      saveParure(paruresToSave);
    }
  };

  return (

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
            <Link href="/basket">
              <button type="button" className={styles.buttonBottom}>
                <img src="/static/cart.svg" alt="panier" />
                Mon panier
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      {props.type[0] === 'unlogged' ? (
        <div className={styles.modal}>
          <div className={styles.basicText}>
            Pour
            {' '}
            <span>créer une séléction de parures</span>
            {' '}
            ou en retrouver une déjà existante, veuillez entrer votre e-mail.
          </div>
          <div className={styles.mail}>
            <input type="email" name="" id="" placeholder="exemple@gmail.com" className={styles.mailInput} onChange={(e) => { setEmail(e.target.value); }} />
          </div>
          <div className={styles.groupButtonsRow}>
            <button type="button" className={styles.buttonBottom} onClick={() => { props.resetModal(), props.logIn(); }}>
              Retour
            </button>
            <button type="button" className={styles.buttonTop} onClick={() => { setPopModal(props.type[1]), props.logIn(email); }}>
              <img src="/static/save.svg" alt="Valider" />
              Valider
            </button>
          </div>
        </div>
      ) : null}

      {props.type === 'save' ? (
        <div className={styles.modal}>
          <div className={styles.greenText}>
            Nommez votre parure
          </div>
          <div className={styles.mail}>
            <input type="text" name="" id="" placeholder="Parure 1" defaultValue={myParure.parureName} className={styles.mailInput} onChange={(e) => { setParureName(e.target.value); }} />
          </div>
          <div className={styles.groupButtonsRow}>
            <button type="button" className={styles.buttonBottom} onClick={() => { props.resetModal(); }}>
              Retour
            </button>
            <Link href="/">
              <button type="button" className={styles.buttonTop} onClick={() => { save(myParure), props.popModal('saved'), props.saveParure(true), setActiveParure({ parureContent: myParure.parureContent, newParure: true }); }}>
                <img src="/static/save.svg" alt="Valider" />
                Valider
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      {props.type === 'saved' ? (
        <div className={styles.modal}>
          <div className={styles.greenText}>
            Ce lit a été enregistré.
          </div>
          <div className={styles.groupButtonsColumn}>
            <button type="button" className={styles.buttonTop} onClick={() => props.resetModal()}>
              Continuer
            </button>
            <Link href="/collection">
              <button type="button" className={styles.buttonBottom}>
                <img src="/static/list_green.svg" alt="Voir la liste" />
                Mes enregistrements
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      {props.type === 'list' ? (
        <div className={styles.modal}>
          <div className={styles.basicText}>
            Voulez-vous enregistrer ce lit avant d’accéder à vos enregistrements ?
          </div>
          <div className={styles.groupButtonsColumn}>
            <button type="button" className={`${styles.buttonTop} ${styles.buttonTop2}`} onClick={() => { props.popModal('save'); }}>
              <img src="/static/list_plus_white.svg" alt="Ajouter dans la liste" />
              Enregistrer le lit
            </button>
            <Link href="/collection">
              <button type="button" className={`${styles.buttonBottom} ${styles.buttonBottom2}`}>
                Continuer sans enregistrer
              </button>
            </Link>
          </div>
        </div>
      ) : null}


    </div>
  );
};

Modal.propTypes = {
  // type: PropTypes.string.isRequired,
  resetModal: PropTypes.func.isRequired,
};

export default Modal;
