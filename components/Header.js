import Link from 'next/link';
import styles from './Header.module.css';
import Button from './Styles/Button';

const Header = () => (
  <div className={styles.header}>
    <Link href="/" >
      <a className={styles.link}>
        <img src="/static/return.png" alt="back icon" className={styles.back} />        
        Retour au site
      </a>
    </Link>
    <div className={styles.right}>
      <Button>
        <img src="/static/settings.svg" alt="settings icon" className={styles.settings} />       
      </Button>
    </div>
  </div>
);

export default Header;
