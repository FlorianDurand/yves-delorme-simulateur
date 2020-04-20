import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { withRedux } from '../lib/redux';
import ParureCard from '../components/ParureCard';
import AddCart from '../components/AddCart';
import HeaderCollection from '../components/HeaderCollection';

import styles from './collection.module.scss';

const getInfo = () => {
  const parures = useSelector((state) => state.parures);
  const idLog = useSelector((state) => state.idLog);
  const initialParureContent = useSelector((state) => state.initialParureContent);
  const dispatch = useDispatch();
  const setActiveParure = (parureContent) => dispatch({
    type: 'activeParure',
    activeParure: parureContent,
  });

  return {
    parures, idLog, initialParureContent, setActiveParure,
  };
};

const Collection = () => {
  const {
    parures, idLog, initialParureContent, setActiveParure,
  } = getInfo();
  console.log(parures);

  const [addCart, setAddCart] = useState(false);
  const [cartContent, setCartContent] = useState();


  return (
    <div>
      <div className={styles.collection}>
        <HeaderCollection idLog={idLog} />
        <div className={styles.parures}>
          <Link href="/">
            <div className={styles.add} onClick={() => setActiveParure({ parureContent: initialParureContent })}>
              <button type="button">
                <img src="/static/icons/iconMore.svg" alt="add" />
              </button>
              <h2>Nouvelle Parure</h2>
            </div>
          </Link>
          {parures[0].parureName ? parures.map((parure) => (
            <div className={styles.parure} key={parure.parureId} onClick={() => setActiveParure({ parureContent: parure.parureContent, parureId: parure.parureId })}>
              <ParureCard parure={parure} setActiveParure={setActiveParure} toggleCart={toggleCart} />
            </div>
          )) : null}
        </div>
      </div>
      {addCart ? (
        <AddCart
          cartContent={cartContent}
        />
      ) : null}
    </div>
  );

  function toggleCart(cartContent) {
    if (!addCart) {
      setAddCart(true);
      setCartContent(cartContent);
    } else {
      setAddCart(false);
    }
  }
};


export default withRedux(Collection);
