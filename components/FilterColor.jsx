import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterColor.module.scss';

const FilterColor = (props) => {
  const [colorActive, setColorActive] = useState('');
  const colors = props.arrayFilters;

  const listFilters = colors.map((color) => (
    <button type="button" className={colorActive.includes(color) ? (styles.itemActive) : (styles.itemNotActive)} onClick={() => activeColor(color)} style={{ backgroundColor: color }} />
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
    if (colorActive.includes(color)) {
      setColorActive(colorActive.replace(color, ''));
    } else {
      setColorActive(colorActive + color);
    }
    props.handleFilterChange(color);
  }
};


FilterColor.propTypes = {
  title: PropTypes.string.isRequired,
  arrayFilters: PropTypes.array.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterColor;
