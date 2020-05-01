import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './FilterBar.module.scss';
import Filters from './Filters';

const FilterBar = (props) => {
  const [isValidateAble, setValidateAble] = useState(false);
  useEffect(() => {
    if (props.numberFilter > 0) {
      setValidateAble(true);
    } else {
      setValidateAble(false);
    }
  }, [props.numberFilter]);

  return (
    <div className={styles.filter}>
      {props.isFilterActive
        ? (
          <div className={styles.filterTitle}>
            <h2 className={styles.title}>Filtres</h2>
            <img className={styles.reset} src="/static/icons/iconReset.svg" alt="reset" onClick={() => props.resetFilter()} />
          </div>
        )
        : (
          <div className={styles.search}>
            <input className={styles.searchInput} type="search" id="item-search" name="item-search" placeholder="Rechercher..." onChange={props.handleSearchChange} />
            <button type="button" className={styles.searchButton}>
              <img src="/static/search.png" alt="search" />
            </button>
          </div>
        )}
      <button type="button" className={isValidateAble && props.isFilterActive ? (styles.filterButtonAble) : (styles.filterButton)} onClick={() => props.onFilterActive()}>
        {/* {props.isFilterActive ? <img src="/static/validate.svg" alt="search" /> : <img src="/static/filter.png" alt="search" /> } */}
        {isValidateAble && !props.isFilterActive ? (
          <div className={styles.numberFilter}>
            <p>{props.numberFilter}</p>
          </div>
        ) : <img src={props.isFilterActive ? ('/static/validate.svg') : ('/static/filter.png')} alt="search" /> }
        {props.isFilterActive ? 'Valider' : 'Filtres' }
      </button>
    </div>
  );
};

FilterBar.propTypes = {
  onFilterActive: PropTypes.func.isRequired,
  isFilterActive: PropTypes.bool.isRequired,
};

export default FilterBar;
