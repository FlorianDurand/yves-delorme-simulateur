import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLeft.module.scss';
import Button from './Styles/Button';
import MenuLeftBase from './MenuLeftBase';

const MenuLeftDecor = (props) => {
  const walls = [
    {
      name: 'wall1',
      imagePreview: '/static/Background/wall_preview_1.png',
      image: '/static/Background/wall_1.png',
    },
    {
      name: 'wall2',
      imagePreview: '/static/Background/wall_preview_2.png',
      image: '/static/Background/wall_2.png',
    },

  ];

  const floors = [
    {
      name: 'floor1',
      imagePreview: '/static/Background/floor_preview_1.png',
      image: '/static/Background/floor_1.png',
      joint: '/static/Background/joint_1.png',
    },
    {
      name: 'floor2',
      imagePreview: '/static/Background/floor_preview_2.png',
      image: '/static/Background/floor_2.png',
      joint: '/static/Background/joint_2.png',
    },

  ];

  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>Décor</h1>
      <div className={styles.articles}>
        <MenuLeftBase name="Mur" onWallChange={props.onItemChange} contentWalls={walls.map((wall) => wall)} />
        <MenuLeftBase name="Sol" onFloorChange={props.onItemChange} onJointChange={props.onItemChange} contentFloors={floors.map((floor) => floor)} />
      </div>
      <div className={styles.barre}>
        <div className={styles.littleRectangle} />
      </div>
    </div>
  );
};

export default MenuLeftDecor;
