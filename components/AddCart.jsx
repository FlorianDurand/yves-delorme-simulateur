import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

import styles from './AddCart.module.scss';


const cartInfo = () => {
  const cart = useSelector((state) => state.cart);
  const parures = useSelector((state) => state.parures);
  const paruresAddedToCart = useSelector((state) => state.paruresAddedToCart);
  const dispatch = useDispatch();
  const saveCart = (cartContent, parureId) => dispatch({
    type: 'addToCart',
    cart: cartContent,
    paruresAddedToCart: parureId,
  });
  const saveParure = (myParure) => dispatch({
    type: 'saveParure',
    parures: myParure,
  });
  return {
    cart, parures, paruresAddedToCart, saveCart, saveParure
  };
};

const AddCart = (props) => {
  const {
    cart, parures, paruresAddedToCart, saveCart, saveParure
  } = cartInfo();

  const currentCart = cart;
  const currentParuresAddedToCart = paruresAddedToCart;
  const parureContentCart = [];
  const arrayParure = Object.keys(props.cartContent);
  const finalArray = [];

  for (let i = 0; i < arrayParure.length; i += 1) {
    if (props.cartContent[arrayParure[i]].id !== -1) {
      parureContentCart.push({ id: props.cartContent[arrayParure[i]].id, stock: 1 });
      finalArray.push(arrayParure[i]);
    }
  }

  let currentParure;
  if (props.parureName) {
    currentParure = {
      parurePreview: props.preview,
      parureContent: props.cartContent,
      parureName : props.parureName,
      parureId: props.parureId
    }
  }
  const saveName = (newParureName) => {
    currentParure.parureName = newParureName
    const index = parures.findIndex((e) => e.parureId === currentParure.parureId);
    parures[index] = currentParure;
    const paruresToSave = parures;
    saveParure(paruresToSave);
  }

  return (
    <div>
      <div className={styles.addcart} onClick={() => props.resetMenu()} />
      <div className={styles.close} onClick={() => props.resetMenu()}>
        <img src="/static/close_green.svg" alt="Fermer le menu" className={styles.closeMenu} />
      </div>
      <div className={styles.addcartContent}>
          {props.parureName ? (
            <div className={styles.header}>
              <input type="text" defaultValue={props.parureName} onChange={(e) => { saveName(e.target.value); }} />
              <img src="/static/icons/iconPenGreen.svg" alt="petit stylo pour modifier l'input" />
            </div>
          ) : (
            <div className={styles.header}>
              Ma parure
            </div>
          )}

        <div className={styles.background}>
          <img className={styles.preview} src={props.preview} alt="preview" />
          {props.parureName ? (
            <div className={styles.floatingButtons}>
              <Link href="/">
                <button type="button" className={styles.buttonRight} onClick={() => props.defineActiveParure({ parureContent: props.cartContent, parureId: props.parureId, parureName: props.parureName })}>Modifier le lit</button>
              </Link>
              <button type="button" className={styles.buttonRight_green} onClick={() => { props.resetMenu(), currentCart.push(...parureContentCart), currentParuresAddedToCart.push(props.parureId), saveCart(currentCart, currentParuresAddedToCart), props.parureNameAddedToCart(props.parureName); }}>
                Ajouter au panier
              </button>
            </div>
          )
            : (
              <div className={styles.floatingButtons}>
                <button type="button" className={styles.buttonRight} onClick={() => props.resetMenu()}>Retour</button>
                <button type="button" className={styles.buttonRight_green} onClick={() => { props.popModal('addedToCart'), props.resetMenu(), currentCart.push(...parureContentCart), currentParuresAddedToCart.push(props.parureId), saveCart(currentCart, currentParuresAddedToCart); }}>
                  Ajouter au panier
                </button>
              </div>
            )}
        </div>

        <div className={styles.cartContent}>
          <div className={styles.subtitle}>
            Composition de la parure
          </div>

          {finalArray.map((item) => (
            <CartItem
              image={props.cartContent[item].image}
              name={props.cartContent[item].name}
              color="Blanc"
              widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
              number={1}
              key={props.cartContent[item].id}
            />
          ))}

          {/* Check si .elementName est différent de celui de base et l'affiche si oui */}


        </div>
      </div>
    </div>

  );
};

// AddCart.propTypes = {
//   duvet: PropTypes.object.isRequired,
//   bigPillow: PropTypes.object.isRequired,
//   smallPillow: PropTypes.object.isRequired,
//   mediumPillow: PropTypes.object.isRequired,
//   fittedSheet: PropTypes.object.isRequired,
//   flatSheet: PropTypes.object.isRequired,
// };

export default AddCart;
