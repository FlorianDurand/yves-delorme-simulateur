import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Component
import FilterBar from './FilterBar';
import ListArticles from './ListArticles';
import ListFilters from './ListFilters';

// Styles
import styles from './Menu.module.scss';


const Menu = (props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    setIsFilterActive(false);
  }, [props.title]);

  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>{props.title}</h1>
      <FilterBar onFilterActive={onFilterActive} isFilterActive={isFilterActive} />
      {isFilterActive
        ? <ListFilters />
        : <ListArticles typeItem={props.typeItem} onItemChange={props.onItemChange} activeArticle={props.activeBed}/>}
    </div>
  );

  function onFilterActive() {
    setIsFilterActive(!isFilterActive);
  }
};


Menu.propTypes = {
  title: PropTypes.string.isRequired,
  typeItem: PropTypes.string.isRequired,
  onItemChange: PropTypes.func.isRequired,
};

export default Menu;
