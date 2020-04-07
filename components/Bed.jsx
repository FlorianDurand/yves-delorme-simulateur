import React, { useState } from 'react';
import styles from './Bed.module.scss';
import Menu from './Menu';
import MenuLeftDecor from './MenuLeftDecor';
import AddCart from './AddCart';

const Bed = (props) => {
  const [duvet, setDuvet] = useState({ image: '/static/Bed/couette2.png', name: 'aucun', id: '1' });
  const [flatSheet, setFlatSheet] = useState({ image: '', name: 'aucun', id: '0' });
  const [fittedSheet, setFittedSheet] = useState({ image: '', name: 'aucun', id: '0' });
  const [smallPillow, setSmallPillow] = useState({ image: '/static/Bed/petitcoussin2.png', name: 'aucun', id: '1' });
  const [centerPillow, setCenterPillow] = useState({ image: '/static/Bed/centrecoussin.png', name: 'aucun', id: '1' });
  const [mediumPillow, setMediumPillow] = useState({ image: '/static/Bed/moyencoussin.png', name: 'aucun', id: '1' });
  const [bigPillow, setBigPillow] = useState({ image: '/static/Bed/groscoussin.png', name: 'aucun', id: '1' });
  const [wall, setWall] = useState({ image: '/static/Background/wall_2.png', id : 1});
  const [floor, setFloor] = useState({image: '/static/Background/floor_2.png', id : 1});
  const [joint, setJoint] = useState('/static/Background/joint_2.png');
  const [tete, setTete] = useState({image: '/static/Background/teteLit_1.png', id : 1});

  return (
    <div>
      {/* La parure de lit composé des différentes images */}
      <div className={styles.background} id="bed" onClick={() => props.resetMenu()}>
        <img className={styles.wall} src={wall.image} alt="wall" />
        <img className={styles.joint} src={joint} alt="joint" />
        <img className={styles.floor} src={floor.image} alt="sol" />
        <img className={styles.tete} src={tete.image} alt="tete de lit" />
        {bigPillow.image !== '' ? <img className={styles.back} src={bigPillow.image} alt="Grands Oreillers" /> : null}
        {bigPillow.image !== '' ? <img className={styles.backRight} src={bigPillow.image} alt="Grands Oreillers" /> : null}
        {mediumPillow.image !== '' ? <img className={styles.middle} src={mediumPillow.image} alt="Oreilles du milieu" /> : null}
        {mediumPillow.image !== '' ? <img className={styles.middleRight} src={mediumPillow.image} alt="Oreilles du milieu" /> : null}
        {centerPillow.image !== '' ? <img className={styles.frontCenter} src={centerPillow.image} alt="Centre Oreiller" /> : null}
        {smallPillow.image !== '' ? <img className={styles.front} src={smallPillow.image} alt="Petit Oreiller" /> : null}
        <img className={styles.duvet} src={duvet.image} alt="Couette" />
      </div>


      {props.menu ? (
        <Menu
          onItemChange={handleItemChange}
          typeItem={props.typeItem}
          title={props.title}
          activeBed={{flatSheet : flatSheet, fittedSheet : fittedSheet, smallPillow : smallPillow, centerPillow : centerPillow, mediumPillow : mediumPillow, bigPillow : bigPillow, duvet : duvet}}
        />
      ) : null}

      {props.menuLeftDecor ? (
        <MenuLeftDecor
          onItemChange={handleItemChange}
          activeBackground={{wall: wall, tete: tete, floor: floor}}
        />
      ) : null}

      {props.addCart ? (
        <AddCart
          preview={props.preview}
          reset={props.resetMenu}
          popModal={props.popModal}
          duvet={duvet}
          smallPillow={smallPillow}
          centerPillow={centerPillow}
          mediumPillow={mediumPillow}
          bigPillow={bigPillow}
          flatSheet={flatSheet}
          fittedSheet={fittedSheet}
        />
      ) : null}
    </div>
  );

  function handleItemChange(item, typeItem) {
    if (typeItem === 'duvet') {
      setDuvet(item); // set le state avec l'objet contenant les infos de la couette
    }

    if (typeItem === 'fittedSheet') {
      setFittedSheet(item);
    }

    if (typeItem === 'flatSheet') {
      setFlatSheet(item);
    }

    if (typeItem === 'smallPillow') {
      setSmallPillow(item);
    }

    if (typeItem === 'centerPillow') {
      setCenterPillow(item);
    }

    if (typeItem === 'mediumPillow') {
      setMediumPillow(item);
    }

    if (typeItem === 'bigPillow') {
      setBigPillow(item);
    }

    if (typeItem === 'wall') {
      setWall(item);
    }

    if (typeItem === 'floor') {
      setFloor(item);
    }

    if (typeItem === 'joint') {
      setJoint(item);
    }

    if (typeItem === 'tete') {
      setTete(item);
    }
  }
};


export default Bed;
