import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Article.module.scss';

const Article = (props) => {
  const { duvet } = props;

  return (
    <div className={styles.articleContent}>

      {props.idActiveArticle == props.id
        ? (
          <div className={`${styles.article} ${styles.articleActive}`}>
            <img className={styles.image} src={props.image} />
            <h2 className={styles.subtitle}>{props.name}</h2>
            <p className={styles.description}>
              {' '}
              -
              {' '}
              {props.grammage}
            </p>
          </div>
        )

        : (
          <div className={`${styles.article}`} onClick={() => { props.onItemChange({ image: props.imageItem, name: props.name }, props.typeItem), props.onArticleChange(props.id, props.typeItem); }}>
            <img className={styles.image} src={props.image} />
            <h2 className={styles.subtitle}>{props.name}</h2>
            <p className={styles.description}>
              {props.material}
              {' '}
              -
              {' '}
              {props.grammage}
            </p>
          </div>
        )}
    </div>
  );
};

Article.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  duvet: PropTypes.string,
  pillow: PropTypes.string,
};

export default Article;
