import Link from 'next/link';
import styles from './Header.module.css';
import Button from './Styles/Button';

const Header = () => (
  <div className={styles.header}>
    <Link href="/" >
      <a className={styles.link}>
        <img src="/static/return.png" alt="Retour au site" className={styles.back} />        
        Retour au site
      </a>
    </Link>
    <div className={styles.right}>
      <div className={styles.openMenu} >
         <Button onClick={ok}>
          <img src="/static/settings.svg" alt="Réglages" className={styles.settings} />       
        </Button>
      </div>
      <div className={styles.filterMenu}>
        <Button classCustom = 'settings' >
          <div className={styles.image}>
            <img src="/static/arrow_1.svg" alt="Tailles" className={styles.iconMenu} /> 
          </div>
          Tailles      
        </Button>
        <Button classCustom = 'settings'>
          <div className={styles.image}>
            <img src="/static/decor.svg" alt="Décor" className={styles.iconMenu} />
          </div>   
          Décor    
        </Button>
        <Button classCustom = 'settings'>
          <div className={styles.image}>
            <img src="/static/filtres.svg" alt="Filtres" className={styles.iconMenu} />  
          </div>  
          Filtres globaux   
        </Button>
      </div>
     
    </div>
  </div>
);

function ok() {
  console.log('hihi');
}

export default Header;
