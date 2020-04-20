import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Bed.module.scss';
import Menu from './Menu';
import MenuLeftDecor from './MenuLeftDecor';
import AddCart from './AddCart';

const getInfo = () => {
  const activeBed = useSelector((state) => state.activeParure.parureContent);
  return { activeBed };
};

const Bed = (props) => {
  const { activeBed } = getInfo();

  const [duvet, setDuvet] = useState(activeBed.duvet);
  const [flatSheet, setFlatSheet] = useState(activeBed.flatSheet);
  const [fittedSheet, setFittedSheet] = useState(activeBed.fittedSheet);
  const [smallPillow, setSmallPillow] = useState(activeBed.smallPillow);
  const [centerPillow, setCenterPillow] = useState(activeBed.centerPillow);
  const [mediumPillow, setMediumPillow] = useState(activeBed.mediumPillow);
  const [bigPillow, setBigPillow] = useState(activeBed.bigPillow);
  const [wall, setWall] = useState({ image: '/static/Background/wall_2.png', id: 1 });
  const [floor, setFloor] = useState({ image: '/static/Background/floor_2.png', id: 1 });
  const [joint, setJoint] = useState('/static/Background/joint_2.png');
  const [tete, setTete] = useState({ image: '/static/Background/teteLit_1.png', id: 1 });

  useEffect(() => props.parureContent({
    parurePreview: props.preview,
    parureContent: {
      duvet, flatSheet, fittedSheet, smallPillow, centerPillow, mediumPillow, bigPillow,
    },
    parureName: 'xxx',
    parureId: props.currentParureId,
  }), [duvet, flatSheet, fittedSheet, smallPillow, centerPillow, mediumPillow, bigPillow, props.preview]);


  return (
    <div>
      {/* La parure de lit composé des différentes images */}
      <div className={props.menuOpen ? (`${styles.openedMenu} ${styles.background}`) : (styles.background)} id="bed" onClick={() => props.resetMenu()}>
        <img className={styles.wall} src={wall.image} alt="wall" />
        <img className={styles.joint} src={joint} alt="joint" />
        <img className={styles.floor} src={floor.image} alt="sol" />
        {tete.image !== '' ? <img className={styles.tete} src={tete.image} alt="tete de lit" /> : null}
        {bigPillow.image !== '' ? <img className={styles.back} src={bigPillow.image} alt="Grands Oreillers" /> : null}
        {bigPillow.image !== '' ? <img className={styles.backRight} src={bigPillow.image} alt="Grands Oreillers" /> : null}
        {mediumPillow.image !== '' ? <img className={styles.middle} src={mediumPillow.image} alt="Oreilles du milieu" /> : null}
        {mediumPillow.image !== '' ? <img className={styles.middleRight} src={mediumPillow.image} alt="Oreilles du milieu" /> : null}
        {centerPillow.image !== '' ? <img className={styles.frontCenter} src={centerPillow.image} alt="Centre Oreiller" /> : null}
        {smallPillow.image !== '' ? <img className={styles.front} src={smallPillow.image} alt="Petit Oreiller" /> : null}
        <div className={styles.blackRectangle} />
        <img className={styles.duvet} src={duvet.image} alt="Couette" />
      </div>


      {props.menu ? (
        <Menu
          onItemChange={handleItemChange}
          typeItem={props.typeItem}
          title={props.title}
          activeBed={{
            flatSheet, fittedSheet, smallPillow, centerPillow, mediumPillow, bigPillow, duvet,
          }}
          resetMenu={props.resetMenu}
        />
      ) : null}

      {props.menuLeftDecor ? (
        <MenuLeftDecor
          onItemChange={handleItemChange}
          activeBackground={{ wall, tete, floor }}
          resetMenu={props.resetMenu}
        />
      ) : null}

      {props.addCart ? (
        <AddCart
          preview={props.preview}
          resetMenu={props.resetMenu}
          popModal={props.popModal}
          cartContent={{flatSheet : flatSheet, fittedSheet : fittedSheet, smallPillow : smallPillow, centerPillow : centerPillow, mediumPillow : mediumPillow, bigPillow : bigPillow, duvet : duvet}}
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
    props.saveParure(false);
  }
};


export default Bed;
