import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import Button from './Styles/Button';


const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.buttons}>
        <div className={styles.button} onClick={() => props.toggleMenu('Taies', 'bigPillow')}><Button>Taies</Button></div>
        <div className={styles.button} onClick={() => props.toggleMenu('Housse de couette', 'duvet')}><Button>Housse de couette</Button></div>
        <div className={styles.button} onClick={() => props.toggleMenu('Drap plat', 'flatSheet')}><Button>Drap plat</Button></div>
        <div className={styles.button} onClick={() => props.toggleMenu('Drap housse', 'fittedSheet')}><Button>Drap housse</Button></div>
      </div>

      <div className={styles.buttonsRight}>
        <button type="button" className={styles.buttonRight_green} onClick={previewRender}>
          <img src="/static/cart_white.svg" alt="panier" />
          Ajouter au panier
        </button>

        <div className={styles.bottomGroup}>
          <button type="button" className={styles.buttonRightLeft} onClick={() => { props.popModal('unlogged'); }}>
            <img src="/static/list_green.svg" alt="Voir la liste" />
          </button>
          <button type="button" className={styles.buttonRight} onClick={() => { props.popModal('unlogged'); }}>
            <img src="/static/list_plus_green.svg" alt="Ajouter dans la liste" />
            Enregistrer le lit
          </button>
        </div>

      </div>
    </div>

  );
  // Supprime le premier Canvas de #trashCanvas, creer un Canvas "caché" contenant tous les éléments de #bed en se servant de html2canvas (non utilisé comme import car à besoin ), puis stocke l'image du Canvas dans la variable dataURI (source de l'image) et la passe ensuite au composant parent. désolé pour la fonction qui fait 1000 choses
  function previewRender() {
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(document.getElementById('bed'), {
        width: 1146, height: 414, x: 125, y: 220,
      }).then((canvas) => {
        document.getElementById('trashCanvas').removeChild(document.getElementById('trashCanvas').childNodes[0]);
        document.getElementById('trashCanvas').appendChild(canvas);
      }).then(() => {
        props.toggleCart();
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