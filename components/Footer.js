import Link from 'next/link';
import styles from './Footer.module.css';
import Button from './Styles/Button'


const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.buttons}>
            <Button>Taies</Button>
            <div className={styles.button}><Button>Housse de couette</Button></div>
            <div className={styles.button}><Button>Drap plat</Button></div>
            <div className={styles.button}><Button>Drap housse</Button></div>
        </div>
    <div>
        
    </div>
    </div>
);

export default Footer;
