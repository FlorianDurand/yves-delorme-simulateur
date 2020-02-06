import Link from 'next/link';
import styles from './Footer.module.css';
import Button from './Styles/Button'


const Footer = () => (
  <div className={styles.footer}>
    <Button>Taies</Button>
    <div>
      <a>Settings</a>
    </div>
  </div>
);

export default Footer;
