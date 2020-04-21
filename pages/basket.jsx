import React from 'react';
import Link from 'next/link';
import styles from './basket.module.scss';

const Basket = () => (

  <div className={styles.basket}>
    <h1>Ceci est la page panier</h1>
    <Link href="/"><h2>Retourner sur le configurateur</h2></Link>
  </div>
);

export default Basket;
