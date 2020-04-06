import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterBar.module.scss';
import Filters from './Filters';

const FilterBar = (props) => (
  <div className={styles.filter}>

    {props.isFilterActive
      ? <h2 className={styles.title}>Filtres</h2>
      : (
        <div className={styles.search}>
          <input className={styles.searchInput} type="search" id="item-search" name="item-search" placeholder="Rechercher..." />
          <button type="button" className={styles.searchButton}>
            {' '}
            <img src="/static/search.png" alt="search" />
            {' '}
          </button>
        </div>
      )}
    <button type="button" className={styles.filterButton} onClick={() => props.onFilterActive()}>
      {props.isFilterActive ? <img src="/static/validate.svg" alt="search" /> : <img src="/static/filter.png" alt="search" /> }
      {props.isFilterActive ? 'Valider' : 'Filtres' }
    </button>
  </div>
);

FilterBar.propTypes = {
  onFilterActive: PropTypes.func.isRequired,
  isFilterActive: PropTypes.bool.isRequired,
};

export default FilterBar;
