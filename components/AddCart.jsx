import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

import styles from './AddCart.module.scss';


const cartInfo = () => {
  const cart = useSelector((state) => state.cart);
  const paruresAddedToCart = useSelector((state) => state.paruresAddedToCart);
  const dispatch = useDispatch();
  const saveCart = (cartContent, parureId) => dispatch({
    type: 'addToCart',
    cart: cartContent,
    paruresAddedToCart : parureId
  });
  return {
    cart, paruresAddedToCart, saveCart,
  };
};

const AddCart = (props) => {
  const {
    cart, paruresAddedToCart, saveCart
  } = cartInfo();

  console.log(cart)
  let currentCart = cart;
  let currentParuresAddedToCart = paruresAddedToCart;

  const  duvet  = props.cartContent.duvet;
  const  smallPillow  = props.cartContent.smallPillow;
  const  mediumPillow  = props.cartContent.mediumPillow;
  const  centerPillow  = props.cartContent.centerPillow;
  const  bigPillow  = props.cartContent.bigPillow;
  const  flatSheet  = props.cartContent.flatSheet;
  const  fittedSheet  = props.cartContent.fittedSheet;
  const base = 'Aucun';

  const  parureContentCart = [{id : duvet.id, stock : 1}, {id : smallPillow.id, stock : 1}, {id : mediumPillow.id, stock : 1}, {id : centerPillow.id, stock : 1}, {id : bigPillow.id, stock : 1}, {id : flatSheet.id, stock : 1}, {id : fittedSheet.id, stock : 1}]

  return (
    <div>
      <div className={styles.addcart} onClick={() => props.resetMenu()} />
      <div className={styles.close} onClick={ () => props.resetMenu()}>
        <img src="/static/close_green.svg" alt="Fermer le menu" className={styles.closeMenu} />
      </div>
      <div className={styles.addcartContent}>
        <div className={styles.header}>
          {props.parureName ? props.parureName : "Ma parure"}
        </div>

        <div className={styles.background}>
          <img className={styles.preview} src={props.preview} alt="preview" />
          {props.parureName ? (
            <div className={styles.floatingButtons}>
               <Link href="/">
                <button type="button" className={styles.buttonRight} onClick={() => props.defineActiveParure({ parureContent : props.cartContent, parureId : props.parureId, parureName : props.parureName })}>Modifier le lit</button>
               </Link>
               <button type="button" className={styles.buttonRight_green} onClick={() => { props.resetMenu(), currentCart.push(...parureContentCart), currentParuresAddedToCart.push(props.parureId), saveCart(currentCart, currentParuresAddedToCart), props.parureNameAddedToCart(props.parureName) }}>
                 Ajouter au panier
               </button>
            </div>
          ) :
          <div className={styles.floatingButtons}>
            <button type="button" className={styles.buttonRight} onClick={() => props.resetMenu()}>Retour</button>
            <button type="button" className={styles.buttonRight_green} onClick={() => { props.popModal('addedToCart'), props.resetMenu(), currentCart.push(...parureContentCart), currentParuresAddedToCart.push(props.parureId), saveCart(currentCart, currentParuresAddedToCart) }}>
              Ajouter au panier
            </button>
          </div>
          }
        </div>

        <div className={styles.cartContent}>
          <div className={styles.subtitle}>
            Composition de la parure
          </div>

          {/* Check si .elementName est différent de celui de base et l'affiche si oui */}
          {bigPillow.name !== base
            ? (
              <CartItem
                image={bigPillow.image}
                name={bigPillow.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={2}
              />
            )
            : null}

          {mediumPillow.name !== base
            ? (
              <CartItem
                image={mediumPillow.image}
                name={mediumPillow.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={2}
              />
            )
            : null}

          {centerPillow.name !== base
            ? (
              <CartItem
                image={centerPillow.image}
                name={centerPillow.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={1}
              />
            )
            : null}

          {smallPillow.name !== base
            ? (
              <CartItem
                image={smallPillow.image}
                name={smallPillow.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={1}
              />
            )
            : null}

          {duvet.name !== base
            ? (
              <CartItem
                image={duvet.image}
                name={duvet.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={1}
              />
            )
            : null}

          {flatSheet.name !== base
            ? (
              <CartItem
                image={flatSheet.image}
                name={flatSheet.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={1}
              />
            )
            : null}

          {fittedSheet.name !== base
            ? (
              <CartItem
                image={fittedSheet.image}
                name={fittedSheet.name}
                color="Blanc"
                widths={['140x200 cm', '140x220 cm', '200x200 cm', '200x220 cm', '240x220 cm', '260x240 cm']}
                number={1}
              />
            )
            : null}

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
