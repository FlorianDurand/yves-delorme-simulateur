
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.scss';

const Filters = (props) => {
  const [isFilterActive, setIsFilterActive] = useState('');
  const filters = props.arrayFilters;

  useEffect(() => {
    setIsFilterActive(props.listFilter);
  }, [props.listFilter]);

  const listFilters = filters.map((filter) => (
    <button type="button" className={isFilterActive.includes(filter) ? (styles.itemActive) : (styles.itemNotActive)} onClick={() => activeFilter(filter)}>
      {filter}
    </button>
  ));

  return (
    <div className={styles.filters}>
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
      <div className={styles.items}>
        {listFilters}
      </div>
    </div>
  );

  function activeFilter(filter) {
    if (isFilterActive.includes(filter)) {
      setIsFilterActive(isFilterActive.replace(filter, ''));
    } else {
      setIsFilterActive(isFilterActive + filter);
    }
    props.handleFilterChange(filter);
  }
};


Filters.propTypes = {
  title: PropTypes.string,
  arrayFilters: PropTypes.array.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
