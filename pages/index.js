import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import styles from './index.module.css'

export default function Index() {
    return (
      <div className={styles.background}>
        <Header />
        <Bed />
        <Menu />
        <Footer />
      </div>
    );
}
