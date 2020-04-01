import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Button from './Styles/Button';

const Header = (props) => {
  const [settings, setSettings] = useState(false);

  return (

    <div className={styles.header}>
      <Link href="/">
        <a className={styles.link}>
          <img src="/static/return.png" alt="Retour au site" className={styles.back} />
          Retour au site
        </a>
      </Link>
      <div className={styles.right}>
        {/*<div className={styles.openMenu} onClick={() => toggleSettings()}>
          <Button>
            <img src="/static/settings.svg" alt="Réglages" className={styles.settings} />
          </Button>
        </div>

         {settings ? (
          <div className={styles.filterMenu}>
            <div onClick={() => props.toggleMenuLeft()}>
              <Button classCustom="settings">
                <div className={styles.image}>
                  <img src="/static/arrow_1.svg" alt="Tailles" className={styles.iconMenu} />
                </div>
                Tailles
              </Button>
            </div> */}
            <div onClick={() => props.toggleMenuLeftDecor()}>
              <Button classCustom="settings">
                <div className={styles.image}>
                  <img src="/static/decor.svg" alt="Décor" className={styles.iconMenu} />
                </div>
                Décoration intérieure
              </Button>
            </div>
          {/* </div>
        )
				  : null} */}

      </div>
    </div>
  );

  function toggleSettings() {
    if (!settings) {
      setSettings(true);
    } else {
      setSettings(false);
    }
  }
};

export default Header;
