import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Link href="/" >
      <a className={styles.link}>
        <img src="/static/return.png" alt="back icon" className={styles.back} />        
        Retour au site
      </a>
    </Link>
    <div>
      <a>Settings</a>
    </div>
  </div>
);

export default Header;
