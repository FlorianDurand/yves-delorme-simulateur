import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLeft.module.scss';

const MenuLeftBase = (props) => (

  <div className={styles.subSection}>
    <h2 className={styles.subtitle}>{props.name}</h2>
    {props.contents
      ? (
        <div className={styles.contents}>
          {props.contents.map((content) => (
            <button type="button" className={styles.button}>
              {' '}
              {content}
              {' '}
            </button>
          ))}
        </div>
      )
      : null }

    {props.contentWalls
      ? (
        <div className={styles.contents}>
          {props.contentWalls.map((contentWall) => <div key={contentWall.id} className={contentWall.id == props.activeWall ? (styles.activeWall) : (styles.notActiveWall)}><img onClick={() => { props.onWallChange({image : contentWall.image, id : contentWall.id}, 'wall'); props.onArticleChange(contentWall.id); }} className={styles.wallPreview} src={contentWall.imagePreview} alt="wall Preview" /></div>)}
        </div>
      )
      : null }

    {props.contentFloors
      ? (
        <div className={styles.contents}>
          {props.contentFloors.map((contentFloor) => <div key={contentFloor.id} className={contentFloor.id == props.activeFloor ? (styles.activeFloor) : (styles.notActiveFloor)}><img onClick={() => { props.onFloorChange({image : contentFloor.image, id: contentFloor.id}, 'floor'), props.onJointChange(contentFloor.joint, 'joint'); props.onArticleChange(contentFloor.id); }} className={styles.floorPreview} src={contentFloor.imagePreview} alt="floor Preview" /></div>)}
        </div>
      )
      : null }

    {props.contentTeteLits
      ? (
        <div className={styles.contents}>
          {props.contentTeteLits.map((contentTeteLit) => <div key={contentTeteLit.id} className={contentTeteLit.id == props.activeTeteLit ? (`${styles.activeFloor} ${styles.teteLit}`) : (`${styles.notActiveFloor} ${styles.teteLit}`)}><img onClick={() => { props.onTeteLitChange({image : contentTeteLit.image, id : contentTeteLit.id}, 'tete'); props.onArticleChange(contentTeteLit.id); }} className={styles.teteLitPreview} src={contentTeteLit.imagePreview} alt="Tete de Lit Preview" /></div>)}
        </div>
      )
      : null }


  </div>
);

MenuLeftBase.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuLeftBase;
