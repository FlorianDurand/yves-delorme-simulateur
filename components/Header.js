import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Link href="/" >
      <a className="link">
        <img src="/static/return.png" alt="my image" className={styles.back} />        
        Retour au site
      </a>
    </Link>
    <div>
      <a>Settings</a>
    </div>
  </div>
);

export default Header;
