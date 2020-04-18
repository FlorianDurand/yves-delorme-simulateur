import React from 'react';
import Link from 'next/link';
import { withRedux } from '../lib/redux';
import { useSelector, shallowEqual } from 'react-redux';
import styles from './collection.module.scss';
import ParureCard from '../components/ParureCard';
import HeaderCollection from '../components/HeaderCollection';

const getInfo = () => {
  const parures = useSelector(state => state.parures)
  const idLog = useSelector(state => state.idLog)
  return { parures, idLog }
  }

const Collection = () => {
  const { parures, idLog } = getInfo()
  console.log(parures)
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
      {parures.map((parure) => {
        <div className={styles.parure}>
        <ParureCard parureId={parure.parureId} parurePreview={parure.parurePreview} parureContent={parure.parureContent} parureName={parure.parureName} key={parure.parureId} />
      </div>
      })}
    </div>

  </div>

);
  };


export default withRedux(Collection);
