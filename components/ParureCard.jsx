import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ParureCard.module.scss';


const ParureCard = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const parures = useSelector((state) => state.parures);

  return (
    <div className={styles.parureCard}>
      <div className={styles.image}>
        <img src={props.parure.parurePreview} alt="Ma parure" />
        {!isDelete
          ? (
            <div className={styles.icons}>
              <div className={styles.cart}>
                <img src="/static/icons/iconAddBasket.svg" alt="cart" />
              </div>
              <div className={styles.bin} onClick={() => toggleDelete()}>
                <img src="/static/icons/iconBin.svg" alt="bin" />
              </div>
            </div>
          )
          : (
            <div className={styles.buttons}>
              <button className={styles.button} onClick={() => props.deleteParure(props.parure)}>Supprimer la parure</button>
              <button className={styles.button} onClick={() => toggleDelete()}>Annuler</button>
            </div>
          )}
      </div>
      <div className={styles.saveBar} onClick={() => props.toggleCart(props.parure)}>
        <p>{props.parure.parureName}</p>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 29L24.2929 20.7071C24.6834 20.3166 24.6834 19.6834 24.2929 19.2929L16 11" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );

  function toggleDelete() {
    setIsDelete(!isDelete);
  }
};


export default ParureCard;
