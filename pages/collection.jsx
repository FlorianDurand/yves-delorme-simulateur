import React from 'react';
import Link from 'next/link';
import { withRedux } from '../lib/redux';
import { useSelector, shallowEqual } from 'react-redux';
import styles from './collection.module.scss';
import ParureCard from '../components/ParureCard';
import HeaderCollection from '../components/HeaderCollection';

const getInfo = () => {
  const parure = useSelector(state => state.parure)
  const idLog = useSelector(state => state.idLog)
  return { parure, idLog }
  }

const Collection = () => {
  const { parure, idLog } = getInfo()
  console.log(parure)
  return(
  <div className={styles.collection}>
    <HeaderCollection idLog={idLog}/>
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
  };


export default withRedux(Collection);
