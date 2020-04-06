
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterColor.module.scss';

const FilterColor = (props) => {
  const [isColorActive, setIsColorActive] = useState('');
  const colors = props.arrayFilters;

  const listFilters = colors.map((color) => (
    <button type="button" className={isColorActive === color ? (styles.itemActive) : (styles.itemNotActive)} onClick={() => activeColor(color)} style={{ backgroundColor: color }} />
  ));

  return (
    <div className={styles.colors}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.items}>
        {listFilters}
      </div>
    </div>
  );

  function activeColor(color) {
    setIsColorActive(color);
  }
};


FilterColor.propTypes = {
  title: PropTypes.string.isRequired,
  arrayFilters: PropTypes.array.isRequired,
};

export default FilterColor;
