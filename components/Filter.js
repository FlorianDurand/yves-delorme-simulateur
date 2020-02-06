import styles from './Filter.module.css';

const Filter = () => (
  <div className={styles.filter}>
    <input className={styles.searchInput} type="search" id="item-search" name="item-search" placeholder="Rechercher..."/>
    <button className={styles.searchButton}> <img src='/static/search.png' alt='search' /> </button>

    <button className={styles.filterButton}>
        <img src='/static/filter.png' alt='search' />
        Filtres
    </button>
  </div>
);

export default Filter;