import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLeft.module.scss';
import MenuLeftBase from './MenuLeftBase';

const walls = [
  {
    id: 0,
    imagePreview: '/static/Background/wall_preview_1.png',
    image: '/static/Background/wall_1.png',
  },
  {
    id: 1,
    imagePreview: '/static/Background/wall_preview_2.png',
    image: '/static/Background/wall_2.png',
  },

];

const floors = [
  {
    id: 0,
    imagePreview: '/static/Background/floor_preview_1.png',
    image: '/static/Background/floor_1.png',
    joint: '/static/Background/joint_1.png',
  },
  {
    id: 1,
    imagePreview: '/static/Background/floor_preview_2.png',
    image: '/static/Background/floor_2.png',
    joint: '/static/Background/joint_2.png',
  },

];
const teteLits = [
  {
    id: 0,
    imagePreview: '/static/none_white.svg',
    image: '',
  },
  {
    id: 1,
    imagePreview: '/static/Background/teteLit_preview_1.png',
    image: '/static/Background/teteLit_1.png',
  },
  {
    id: 2,
    imagePreview: '/static/Background/teteLit_preview_2.png',
    image: '/static/Background/teteLit_2.png',
  },
  {
    id: 3,
    imagePreview: '/static/Background/teteLit_preview_3.png',
    image: '/static/Background/teteLit_3.png',
  },

];

const MenuLeftDecor = (props) => {
  // Set active wall Id
  const [activeWall, setWallActiveId] = useState(props.activeBackground.wall.id);
  const [activeFloor, setFloorActiveId] = useState(props.activeBackground.floor.id);
  const [activeTeteLit, setTeteLitActiveId] = useState(props.activeBackground.tete.id);

  return (
    <div>
      <div className={styles.close} onClick={() => props.resetMenu()}>
        <img src="/static/close_green.svg" alt="Fermer le menu" className={styles.closeMenu} />
      </div>
      <div className={styles.menu}>
        <h1 className={styles.title}>Décoration intérieur</h1>
        <div className={styles.articles}>
          <MenuLeftBase name="Mur" onWallChange={props.onItemChange} onArticleChange={onWallChange} contentWalls={walls.map((wall) => wall)} activeWall={activeWall} />
          <MenuLeftBase name="Sol" onFloorChange={props.onItemChange} onJointChange={props.onItemChange} onArticleChange={onFloorChange} contentFloors={floors.map((floor) => floor)} activeFloor={activeFloor} />
          <MenuLeftBase name="Tête de lit" onTeteLitChange={props.onItemChange} onArticleChange={onTeteLitChange} contentTeteLits={teteLits.map((teteLit) => teteLit)} activeTeteLit={activeTeteLit} />
        </div>
      </div>
    </div>
  );

  function onWallChange(id) {
    setWallActiveId(id);
  }

  function onFloorChange(id) {
    setFloorActiveId(id);
  }

  function onTeteLitChange(id) {
    setTeteLitActiveId(id);
  }
};

MenuLeftDecor.propTypes = {
  onItemChange: PropTypes.func.isRequired,
};

export default MenuLeftDecor;
