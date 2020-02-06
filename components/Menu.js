import styles from './Menu.module.css';
import Button from './Styles/Button';
import Filter from './Filter';

const Menu = () => (
  <div className={styles.menu}>
    <h1 className={styles.title}>Housse de couette</h1>
    <Filter />
  </div>
);

export default Menu;