import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddCart.module.scss';

const CartItem = (props) => {
  const [number, setNumber] = useState({ stock_wanted: props.number });

  return (
    <div className={styles.addedToCart}>
      <div className={styles.imgContainer}><img className={styles.img} src={props.image} alt="apercu" /></div>
      <div className={styles.name}>
        {props.name}
      </div>
      <div className={styles.color}>
        {props.color}
      </div>
      <div className={styles.picker}>
        <select>
          {props.widths.map((width) => <option value={width}>{width}</option>)}
        </select>
      </div>
      <div className={styles.number}>
        <button type="button" onClick={() => setNumber({ stock_wanted: number.stock_wanted - 1 })}><img className={styles.btn} src="/static/moins.svg" alt="moins" /></button>
        <input className={styles.inputNumber} type="number" defaultValue={number.stock_wanted} />
        <button type="button" onClick={() => setNumber({ stock_wanted: number.stock_wanted + 1 })}><img className={styles.btn} src="/static/plus.svg" alt="plus" /></button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};


export default CartItem;
