import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.scss';
import Button from './Styles/Button';

const Filters = (props) => (
  <div className={styles.filters}>
    <h2 className={styles.title}>Style</h2>
    <div className={styles.items}>
      <p className={styles.item}>Luxe</p>
      <p className={styles.item}>Bord de mer</p>
      <p className={styles.item}>Jardin</p>
      <p className={styles.item}>Déco</p>
    </div>
  </div>
);

Filters.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filters;
