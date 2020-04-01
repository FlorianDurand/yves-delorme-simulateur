import styles from './Filter.module.scss';

const Filter = () => (
  <div className={styles.filter}>
    <div className={styles.search}>
        <input className={styles.searchInput} type="search" id="item-search" name="item-search" placeholder="Rechercher..."/>
        <button className={styles.searchButton}> <img src='/static/search.png' alt='search' /> </button>
    </div>
    <button className={styles.filterButton}>
        <img src='/static/filter.png' alt='search' />
        Filtres
    </button>
  </div>
);

export default Filter;