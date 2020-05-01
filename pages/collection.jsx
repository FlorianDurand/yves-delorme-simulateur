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
    parures, idLog, initialParureContent, setActiveParure
  };
};

const Collection = () => {
  const {
    parures, idLog, initialParureContent, setActiveParure
  } = getInfo();

  const [addCart, setAddCart] = useState(false);
  const [cartContent, setCartContent] = useState();
  const [cartPreview, setCartPreview] = useState();
  const [cartName, setCartName] = useState();
  const [cartId, setCartId] = useState();
  const [nameOfParureAddedToCart, setNameOfParureAdded] = useState(false);

  return (
    <div>
      <div className={styles.collection}>
        <HeaderCollection idLog={idLog} setActiveParure={setActiveParure({ parureContent: initialParureContent })} nameOfParureAddedToCart={nameOfParureAddedToCart} />
        <div className={styles.parures}>
          <Link href="/">
            <div className={styles.add} onClick={() => setActiveParure({ parureContent: initialParureContent })}>
              <button type="button">
                <img src="/static/icons/iconMore.svg" alt="add" />
              </button>
              <h2>Nouvelle Parure</h2>
            </div>
          </Link>
          {parures[0] ? parures.map((parure) => (
            <div className={styles.parure} key={parure.parureId}>
              <ParureCard parure={parure} setActiveParure={setActiveParure} toggleCart={toggleCart} deleteParure={deleteParure} parureNameAddedToCart={parureNameAddedToCart} />
            </div>
          )) : null}
        </div>
      </div>
      {addCart ? (
        <AddCart
          defineActiveParure={defineActiveParure}
          resetMenu={resetMenu}
          parureName={cartName}
          preview={cartPreview}
          cartContent={cartContent}
          parureId={cartId}
          parureNameAddedToCart={parureNameAddedToCart}
        />
      ) : null}
    </div>
  );

  function defineActiveParure(parure) {
    setActiveParure(parure);
  }
  function resetMenu() {
    setAddCart(false);
  }

  function toggleCart(parure) {
    if (!addCart) {
      setAddCart(true);
      setCartContent(parure.parureContent);
      setCartPreview(parure.parurePreview);
      setCartName(parure.parureName);
      setCartId(parure.parureId);
    } else {
      setAddCart(false);
    }
  }

  function deleteParure(parure) {
    const index = parures.indexOf(parure);
    if (index > -1) {
      parures.splice(index, 1);
      setActiveParure(parures);
    }
  }

  function parureNameAddedToCart(name) {
    setNameOfParureAdded(`${name} ajouté au panier.`);
    setTimeout(() => setNameOfParureAdded(false), 3000);
  }
};


export default withRedux(Collection);
