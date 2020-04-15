import React from 'react';
import Link from 'next/link';

import styles from './collection.module.scss';
import ParureCard from '../components/ParureCard';
import HeaderCollection from '../components/HeaderCollection';


const Collection = () => (

  <div className={styles.collection}>
    <HeaderCollection />
    <div className={styles.parures}>
      <Link href="/">
        <div className={styles.add}>
          <button type="button">
            <img src="/static/icons/iconMore.svg" alt="add" />
          </button>
          <h2>Nouvelle Parure</h2>
        </div>
      </Link>
      <div className={styles.parure}>
        <ParureCard />
      </div>
      <div className={styles.parure}>
        <ParureCard />
      </div>
      <div className={styles.parure}>
        <ParureCard />
      </div>
    </div>

  </div>

);


export default Collection;
