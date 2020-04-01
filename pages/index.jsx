import React, { useState } from 'react';
import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import MenuLeft from '../components/MenuLeft';
import MenuLeftDecor from '../components/MenuLeftDecor';


import styles from './index.module.scss';

export default function Index() {
  const [menu, setMenu] = useState(false);
  const [menuLeft, setMenuLeft] = useState(false);
  const [menuLeftDecor, setMenuLeftDecor] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const [typeArticle, setTypeArticle] = useState('');
  const [titleArticle, setTitleArticle] = useState('');
  const [preview, setPreview] = useState();

  return (
    <div className={styles.background}>
      <Header toggleMenuLeft={toggleMenuLeft} toggleMenuLeftDecor={toggleMenuLeftDecor} />
      <Bed menu={menu} addCart={addCart} menuLeftDecor={menuLeftDecor} title={titleArticle} typeItem={typeArticle} resetMenu={resetMenu} preview={preview} />
      {menuLeft ? (<MenuLeft />) : null}
      <Footer toggleMenu={toggleMenu} toggleCart={toggleCart} preview={previewF} />
      <div id="trashCanvas">
        <canvas id="canvas" />
      </div>
    </div>
  );

  function previewF(preview) {
    setPreview(preview);
  }
  function toggleMenu(title, type) {
    if (!menu) {
      setMenu(true);
      setTypeArticle(type);
      setTitleArticle(title);
    } else if (typeArticle != type) {
      setTypeArticle(type);
    } else {
      setMenu(false);
      setTypeArticle(type);
    }
  }

  function toggleMenuLeft() {
    if (!menuLeft) {
      setMenuLeft(true);
    } else {
      setMenuLeft(false);
    }
  }

  function toggleMenuLeftDecor() {
    if (!menuLeftDecor) {
      setMenuLeftDecor(true);
    } else {
      setMenuLeftDecor(false);
    }
  }

  function toggleCart() {
    if (!addCart) {
      setAddCart(true);
    } else {
      setAddCart(false);
    }
  }

  function resetMenu() {
    setAddCart(false);
    setMenuLeft(false);
    setMenu(false);
    setMenuLeftDecor(false);
  }
}
