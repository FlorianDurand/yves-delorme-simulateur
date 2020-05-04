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
        {isValidateAble && !props.isFilterActive ? (
          <div className={styles.numberFilter}>
            <p>{props.numberFilter}</p>
          </div>
        ) : null }
        {isValidateAble
          ? (
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.6667 0C22.2987 0 21.9653 0.158676 21.7227 0.416509L9.25065 13.668L2.18669 7.41199L2.17599 7.42617C1.94399 7.22217 1.65867 7.08333 1.33333 7.08333C0.597333 7.08333 0 7.718 0 8.5C0 8.93633 0.197348 9.31316 0.490681 9.57383L0.47998 9.58801L8.47998 16.6713L8.49068 16.6572C8.72268 16.8612 9.008 17 9.33333 17C9.70133 17 10.0347 16.8413 10.2773 16.5835L23.608 2.41968C23.8507 2.16184 24 1.80767 24 1.41667C24 0.634667 23.4027 0 22.6667 0Z" fill="#fff" />
            </svg>
          )
          : <img src={props.isFilterActive ? ('/static/validate.svg') : ('/static/filter.png')} alt="search" />}
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
