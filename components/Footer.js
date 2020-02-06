import Link from 'next/link';
import styles from './Footer.module.css';
import Button from './Styles/Button'


const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.buttons}>
            <div className={styles.button}><Button>Taies</Button></div>
            <div className={styles.button}><Button>Housse de couette</Button></div>
            <div className={styles.button}><Button>Drap plat</Button></div>
            <div className={styles.button}><Button>Drap housse</Button></div>
        </div>

        <div className={styles.buttonsRight}>
            <button className={styles.buttonRight}>
                <img src="/static/cross.png" alt="croix" />
                Enregistrer la parure
            </button>

            <button className={styles.buttonRight}>
                <img src="/static/saved.svg" alt="saved" />
                Parures enregistrées
            </button>
        </div>
    </div>
        
    
);

export default Footer;
