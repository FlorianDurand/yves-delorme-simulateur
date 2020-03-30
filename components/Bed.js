import styles from './Bed.module.css';
import React, { useState } from 'react';
import Menu from './Menu'
import MenuLeftDecor from './MenuLeftDecor';
import AddCart from '../components/AddCart';

const Bed = props => {

	const [duvet, setDuvet] = useState({ image : '/static/Bed/couette2.png', name : 'aucun'});
	const [flatSheet, setFlatSheet] = useState({ image : '', name : 'aucun'});
	const [fittedSheet, setFittedSheet] = useState({ image : '', name : 'aucun'});
	const [smallPillow, setSmallPillow] = useState({ image : '/static/Bed/petitcoussin.png', name : 'aucun'});
	const [centerPillow, setCenterPillow] = useState({ image : '/static/Bed/centrecoussin.png', name : 'aucun'});
	const [mediumPillow, setMediumPillow] = useState({ image :'/static/Bed/moyencoussin.png', name : 'aucun'} );
	const [bigPillow, setBigPillow] = useState({image : '/static/Bed/groscoussin.png', name : 'aucun'});
	const [wall, setWall] = useState('/static/Bed/wall.png');
	const [floor, setFloor] = useState('/static/Bed/sol.png');
	const [joint, setJoint] = useState('/static/Bed/joint.png');

	return (
		<div>
			{/* La parure de lit composé des différentes images */}
			<div className={styles.background} id="bed" onClick={() => props.resetMenu()}>
				<img className={styles.wall} src={wall} alt="wall" />
				<img className={styles.joint} src={joint} alt="joint" />
				<img className={styles.floor} src={floor} alt="sol" />
				<img className={styles.tete} src="/static/Bed/tetedelit.png" alt="tete de lit" />
				<img className={styles.back} src={bigPillow.image} alt="Grands Oreillers" />
				<img className={styles.backRight} src={bigPillow.image} alt="Grands Oreillers" />
				<img className={styles.middle} src={mediumPillow.image} alt="Oreilles du milieu" />
				<img className={styles.middleRight} src={mediumPillow.image} alt="Oreilles du milieu" />
				<img className={styles.frontCenter} src={centerPillow.image} alt="Centre Oreiller" />
				<img className={styles.front} src={smallPillow.image} alt="Petit Oreiller" />
				<img className={styles.duvet} src={duvet.image} alt="Couette" />
			</div>
		

			{props.menu ? (
				<Menu 
					onItemChange={handleItemChange}
					typeItem={props.typeItem}
					title={props.title}/>
				) : null}

			{props.menuLeftDecor ? (
				<MenuLeftDecor 					
					onItemChange={handleItemChange}/>
				) : null}

			{props.addCart  ? (
				<AddCart 
					preview={props.preview}
					reset={resetMenu}
					duvet={duvet}
					smallPillow={smallPillow}
					centerPillow={centerPillow} 
					mediumPillow={mediumPillow} 
					bigPillow={bigPillow} 
					flatSheet={flatSheet} 
					fittedSheet={fittedSheet}/>
				) : null}
		</div>
	)
	function resetMenu() {
		props.resetMenu()
	}

	function handleItemChange(item, typeItem){
		if(typeItem == 'duvet'){
			setDuvet(item); //set le state avec l'objet contenant les infos de la couette
		}

		if(typeItem == 'fittedSheet'){
			setFittedSheet(item); 
		}

		if(typeItem == 'flatSheet'){
			setFlatSheet(item); 
		}

		if(typeItem == 'smallPillow'){
			setSmallPillow(item); 
		}

		if(typeItem == 'centerPillow'){
			setCenterPillow(item); 
		}

		if(typeItem == 'mediumPillow'){
			setMediumPillow(item); 
		}

		if(typeItem == 'bigPillow'){
			setBigPillow(item); 
		}

		if(typeItem == 'wall'){
			setWall(item); 
		}

		if(typeItem == 'floor'){
			setFloor(item); 
		}

		if(typeItem == 'joint'){
			setJoint(item); 
		}
		
	}
};



export default Bed;