import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';


const Footer = (props) => {
  const [isActive, setIsActive] = useState('');
  return (
    <div className={styles.footer}>
      <div className={styles.buttons}>
        <div className={isActive === 'Taies' ? (styles.activeButton) : (styles.notActiveButton)} onClick={() => { props.toggleMenu('Taies', 'bigPillow'), setIsActive('Taies'); }}>Taies</div>
        <div className={isActive === 'Housse' ? (styles.activeButton) : (styles.notActiveButton)} onClick={() => { props.toggleMenu('Housse de couette', 'duvet'), setIsActive('Housse'); }}>Housse de couette</div>
        <div className={isActive === 'flat' ? (styles.activeButton) : (styles.notActiveButton)} onClick={() => { props.toggleMenu('Drap plat', 'flatSheet'), setIsActive('flat'); }}>Drap plat</div>
        <div className={isActive === 'fitted' ? (styles.activeButton) : (styles.notActiveButton)} onClick={() => { props.toggleMenu('Drap housse', 'fittedSheet'), setIsActive('fitted'); }}>Drap housse</div>
      </div>

      <div className={styles.buttonsRight}>

        <div className={styles.bottomGroup}>
          {props.savedBed ? (
            <Link href="/collection">
              <button type="button" className={styles.buttonRightLeft}>
                <img src="/static/icons/iconFolder.svg" alt="Voir la liste" />
              </button>
            </Link>
          ) : (
            <button type="button" className={styles.buttonRightLeft} onClick={() => { props.popModal('list'), previewRender(); }}>
              <img src="/static/icons/iconFolder.svg" alt="Voir la liste" />
            </button>
          )}
          <button type="button" className={styles.buttonRight} onClick={() => { props.popModal('save'), previewRender(); }}>
            <img src="/static/icons/iconSave.svg" alt="Ajouter dans la liste" />
            Enregistrer
          </button>
        </div>


        <button type="button" className={styles.buttonRight_green} onClick={() => previewRender('cart')}>
          <img src="/static/cart_plus_white.svg" alt="panier" />
          Ajouter au panier
        </button>

      </div>
    </div>

  );
  // Supprime le premier Canvas de #trashCanvas, creer un Canvas "caché" contenant tous les éléments de #bed en se servant de html2canvas (non utilisé comme import car à besoin ), puis stocke l'image du Canvas dans la variable dataURI (source de l'image) et la passe ensuite au composant parent. désolé pour la fonction qui fait 1000 choses
  function previewRender(cart) {
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(document.getElementById('bed'), {
        width: 1146, height: 714, x: 100, y: 220, scale: 1,
      }).then((canvas) => {
        document.getElementById('trashCanvas').removeChild(document.getElementById('trashCanvas').childNodes[0]);
        document.getElementById('trashCanvas').appendChild(canvas);
      }).then(() => {
        cart ? props.toggleCart() : null;
        const dataURI = document.getElementById('trashCanvas').childNodes[0].toDataURL();
        props.preview(dataURI);
      });
    }).catch((e) => { console.log('load failed'); });
  }
};

Footer.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default Footer;
