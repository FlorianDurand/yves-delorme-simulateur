import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuLeft.module.scss';
import MenuLeftBase from './MenuLeftBase';
import walls from './data/Wall';
import floors from './data/Floor';
import teteLits from './data/TeteDeLit';


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
