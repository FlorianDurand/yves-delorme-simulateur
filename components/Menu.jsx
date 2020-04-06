import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Component
import FilterBar from './FilterBar';
import ListArticles from './ListArticles';
import ListFilters from './ListFilters';

// Styles
import styles from './Menu.module.scss';


const Menu = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(true);

  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>{props.title}</h1>
      <FilterBar />
      {isFilterActive
        ? <ListFilters />
        : <ListArticles typeItem={props.typeItem} onItemChange={props.onItemChange} />}
    </div>
  );
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  typeItem: PropTypes.string.isRequired,
  onItemChange: PropTypes.func.isRequired,
};

export default Menu;
