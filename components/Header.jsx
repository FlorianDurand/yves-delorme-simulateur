import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Button from './Styles/Button';

const Header = (props) => (

  <div className={styles.header}>
    <Link href="/">
      <a className={styles.link}>
        <img src="/static/return.png" alt="Retour au site" className={styles.back} />
        Retour au site
      </a>
    </Link>
    <div className={styles.right}>

      <div onClick={() => props.toggleMenuLeftDecor()}>
        <Button classCustom="settings">
          <div className={styles.image}>
            <img src="/static/decor.svg" alt="Décor" className={styles.iconMenu} />
          </div>
          Décoration intérieure
        </Button>
      </div>

    </div>
  </div>
);

Header.propTypes = {
  toggleMenuLeftDecor: PropTypes.func.isRequired,
};

export default Header;
