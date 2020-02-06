import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Link href="/" >
      <a >
        
        Retour au site
      </a>
    </Link>
    <img src="/public/static/return.png" alt="my image" className={styles.back} />
    <div>
      <a>Settings</a>
    </div>
  </div>
);

export default Header;
