import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.scss';

const Article = (props) => (
  <div className={styles.articleContent}>

    { props.idActiveArticle === props.id
      ? (
        <div className={`${styles.article} ${styles.articleActive}`}>
          <div className={styles.imageMenu}>
            <img src={props.imageMenu} alt="article" />
          </div>
          <h2 className={styles.subtitle}>{props.name}</h2>
          <div className={styles.description}>
            <p>{props.material}</p>
            <p>{props.grammage}</p>
          </div>
        </div>
      )

      : (
        <div className={`${styles.article}`} onClick={() => { props.onItemChange({ image: props.image, name: props.name, id: props.id }, props.typeItem), props.onArticleChange(props.id, props.typeItem); }}>
          <div className={styles.imageMenu}>
            <img src={props.imageMenu} />
          </div>
          <h2 className={styles.subtitle}>{props.name}</h2>
          <div className={styles.description}>
            <p>{props.material}</p>
            <p>{props.grammage}</p>
          </div>
        </div>
      )}


  </div>
);

Article.propTypes = {
  imageMenu: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  idActiveArticle: PropTypes.number.isRequired,
  onItemChange: PropTypes.func.isRequired,
  onArticleChange: PropTypes.func.isRequired,
  typeItem: PropTypes.string.isRequired,
};

export default Article;
