import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

import styles from './AddCart.module.scss';

const AddCart = (props) => {
  const { duvet } = props;
  const { smallPillow } = props;
  const { mediumPillow } = props;
  const { bigPillow } = props;
  const { flatSheet } = props;
  const { fittedSheet } = props;
  const base = 'aucun';

  return (
    <div>
      <div className={styles.addcart} onClick={() => props.reset()} />
      <div className={styles.addcartContent}>
        <div className={styles.header}>
          <input type="text" placeholder="Parure 1" />
        </div>

        <div className={styles.background}>
          <img className={styles.preview} src={props.preview} alt="preview" />
          <div className={styles.floatingButtons}>
            <button className={styles.buttonRight}>Retour</button>
            <button className={styles.buttonRight_green} onClick={() => {props.popModal('addedToCart'), props.reset()}}>
              <img src="/static/cart_white.svg" alt="panier" />
              Valider
            </button>
          </div>
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

AddCart.propTypes = {
  duvet: PropTypes.object.isRequired,
  smallPillow: PropTypes.object.isRequired,
  mediumPillow: PropTypes.object.isRequired,
  bigPillow: PropTypes.object.isRequired,
  flatSheet: PropTypes.object.isRequired,
  fittedSheet: PropTypes.object.isRequired,
};

export default AddCart;
