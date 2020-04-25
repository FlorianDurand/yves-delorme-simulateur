import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ParureCard.module.scss';

const cartInfo = () => {
  const cart = useSelector((state) => state.cart);
  const paruresAddedToCart = useSelector((state) => state.paruresAddedToCart);
  return {
    cart, paruresAddedToCart
  };
};

const ParureCard = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isAddedBasket, setIsAddedBasket] = useState(false);

  const {
    cart, paruresAddedToCart
  } = cartInfo();

  const alreadyAdded = paruresAddedToCart.includes(props.parure.parureId)

  useEffect(() => {
    setIsAddedBasket(alreadyAdded)
  }, [alreadyAdded])

  return (
    <div className={styles.parureCard}>
      <div className={styles.image}>
        <img className={styles.imgBackground} src={props.parure.parurePreview} alt="Ma parure" onClick={() => props.toggleCart(props.parure)} />
        {!isDelete
          ? (
            <div className={styles.icons}>

              {!isAddedBasket
                ? (
                  <div className={styles.cart} onClick={() => toggleBasket()}>
                    <img src="/static/icons/iconAddBasket.svg" alt="cart" />
                  </div>
                )
                : (
                  <div className={styles.cartRemove} onClick={() => toggleBasket()}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="35.5" y="10.5" width="2" height="12" rx="1" transform="rotate(90 35.5 10.5)" fill="white" stroke="white" />
                      <path d="M23.1524 23.2189L19.1879 18.2467C19.0801 18.1116 18.9225 18.0245 18.7498 18.0044C18.577 17.9844 18.4033 18.033 18.2668 18.1396C18.1303 18.2463 18.0422 18.4022 18.0219 18.5731C18.0016 18.744 18.0508 18.9158 18.1586 19.0509L21.4805 23.2189H9.78614L13.0993 19.0509C13.1527 18.984 13.1922 18.9074 13.2157 18.8254C13.2391 18.7434 13.246 18.6577 13.236 18.5731C13.2259 18.4885 13.1991 18.4066 13.1571 18.3323C13.1151 18.2579 13.0587 18.1924 12.9911 18.1396C12.9235 18.0868 12.8461 18.0477 12.7632 18.0245C12.6803 18.0013 12.5937 17.9945 12.5081 18.0044C12.4226 18.0144 12.3399 18.0409 12.2647 18.0824C12.1895 18.124 12.1233 18.1798 12.0699 18.2467L8.10553 23.2189H5.65564C5.48175 23.2189 5.31499 23.2872 5.19203 23.4088C5.06908 23.5305 5 23.6954 5 23.8674C5 24.0395 5.06908 24.2044 5.19203 24.326C5.31499 24.4477 5.48175 24.516 5.65564 24.516H6.63253L7.8542 31.8382C7.95735 32.4418 8.27302 32.99 8.74537 33.3856C9.21771 33.7812 9.81629 33.9989 10.4352 34H20.5713C21.1903 33.9989 21.7888 33.7812 22.2612 33.3856C22.7335 32.99 23.0492 32.4418 23.1524 31.8382L24.3675 24.5268H25.3444C25.5182 24.5268 25.685 24.4585 25.808 24.3368C25.9309 24.2152 26 24.0503 26 23.8783C26 23.7062 25.9309 23.5413 25.808 23.4197C25.685 23.298 25.5182 23.2297 25.3444 23.2297L23.1524 23.2189ZM21.8651 31.622C21.8135 31.9244 21.6551 32.1989 21.4183 32.3967C21.1814 32.5946 20.8814 32.7031 20.5713 32.7029H10.4352C10.1252 32.7031 9.82512 32.5946 9.58827 32.3967C9.35141 32.1989 9.1931 31.9244 9.14143 31.622L7.96129 24.5203H23.0409L21.8651 31.622Z" fill="white" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}

              <div className={styles.bin} onClick={() => toggleDelete()}>
                <img src="/static/icons/iconBin.svg" alt="bin" />
              </div>
            </div>
          )
          : (
            <div className={styles.buttons}>
              <Link href="/collection"><button className={styles.button} onClick={() => props.deleteParure(props.parure)}>Supprimer la parure</button></Link>
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

  function toggleBasket() {
    setIsAddedBasket(!isAddedBasket);
  }
};


export default ParureCard;
