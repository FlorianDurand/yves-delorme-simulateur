import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, connect } from 'react-redux';
import styles from './Header.module.scss';
import Button from './Styles/Button';

const getInfo = () => {
  const idLog = useSelector((state) => state.idLog);
  const dispatch = useDispatch();
  const disconnect = (idLogLocal) => dispatch({
    type: 'disconnect',
    idLog: idLogLocal
  });
  return {
    disconnect, idLog
  };
};

const Header = (props) => {
  const { disconnect, idLog } = getInfo();
  const [connectionBar, setConnectionBar] = useState(false);
  const [email, setEmail] = useState();

  useEffect(() => {
    setConnectionBar(props.needToLog);
  }, [props.needToLog]);

  return (
    <div className={styles.header}>

      <Link href="/">
        <a className={styles.link} onClick={() => props.popModal('returnSite')}>
          <img src="/static/return.png" alt="Retour au site" className={styles.back} />
          Retour au site
        </a>
      </Link>
      <div className={styles.center} onClick={() => toggleConnection()}>
        <img src="/static/icons/iconUser.svg" alt="petit bonhomme de connexion" />
        <div className={styles.name}>
          {idLog || 'Connexion'}
        </div>

      </div>
      {connectionBar && !idLog ? (
        <div className={styles.connectionBar}>
          <div className={styles.triangle} />
          <div className={styles.basicText}>
            Entrez votre
            {' '}
            <span>adresse e-mail</span>
            {' '}
            pour enregistrer une parure.
          </div>
          <div className={styles.mail}>
            <input type="email" name="" id="" placeholder="exemple@gmail.com" className={styles.mailInput} onChange={(e) => { setEmail(e.target.value); }} />
          </div>
          <div className={styles.groupButtonsRow}>
            <button type="button" className={styles.buttonBottom} onClick={() => { toggleConnection(), props.logIn(), setEmail(''), props.toggleNeedToLog(); }}>
              Retour
            </button>
            <button type="button" style={email ? null : { opacity: '0.2' }} className={styles.buttonTop} onClick={email ? () => { toggleConnection(), props.logIn(email); } : null}>
              Connexion
            </button>
          </div>
        </div>
      ) : null}

      {connectionBar && idLog ? (
        <div className={styles.connectionBar}>
          <div className={styles.triangle} />
          <div className={styles.basicText}>
            Voulez-vous quitter cette sélection ?
          </div>
          <div className={styles.groupButtonsRow}>
            <button type="button" className={styles.buttonBottom} onClick={() => { toggleConnection(); }}>
              Retour
            </button>
            <button type="button" className={styles.buttonTop} onClick={() => { toggleConnection(), props.logIn(), setEmail(''), disconnect("") }}>
              Se déconnecter
            </button>
          </div>
        </div>
      ) : null}

      <div className={styles.right}>

        <div onClick={() => props.toggleMenuLeftDecor()}>
          <Button classCustom="settings">
            <div className={styles.image}>
              <img src="/static/decor.svg" alt="Décor" className={styles.iconMenu} />
            </div>
            Décor
          </Button>
        </div>

      </div>
    </div>
  );

  function toggleConnection() {
    setConnectionBar(!connectionBar);
  }
};

Header.propTypes = {
  toggleMenuLeftDecor: PropTypes.func.isRequired,
};

export default Header;
