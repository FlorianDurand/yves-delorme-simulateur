import styles from './Bed.module.css';
import React, { useState } from 'react';
import Menu from './Menu'
import MenuLeftDecor from './MenuLeftDecor';
import AddCart from '../components/AddCart';

const Bed = props => {

	const [couette, setCouette] = useState({ couetteImage : '/static/Bed/couette2.png', couetteName : 'aucun'});
	const [drapPlat, setDrapPlat] = useState({ drapImage : '', drapName : 'aucun'});
	const [drapHousse, setDrapHousse] = useState({ drapImage : '', drapName : 'aucun'});
	const [smallPillow, setSmallPillow] = useState({ pillowImage : '/static/Bed/petitcoussin.png', pillowName : 'aucun'});
	const [mediumPillow, setMediumPillow] = useState({ pillowImage :'/static/Bed/moyencoussin.png', pillowName : 'aucun'} );
	const [largePillow, setLargePillow] = useState({pillowImage : '/static/Bed/groscoussin.png', pillowName : 'aucun'});
	const [wall, setWall] = useState('/static/Bed/wall.png');
	const [floor, setFloor] = useState('/static/Bed/sol.png');
	const [joint, setJoint] = useState('/static/Bed/joint.png');

	return (
		<div>
		<div className={styles.background} onClick={() => props.resetMenu()}>

			<img className={styles.wall} src={wall} alt="wall" />
			<img className={styles.joint} src={joint} alt="joint" />
			<img className={styles.floor} src={floor} alt="sol" />
			<img className={styles.tete} src="/static/Bed/tetedelit.png" alt="tete de lit" />
			<img className={styles.back} src={largePillow.pillowImage} alt="Grands Oreillers" />
			<img className={styles.backRight} src={largePillow.pillowImage} alt="Grands Oreillers" />
			<img className={styles.middle} src={mediumPillow.pillowImage} alt="Oreilles du milieu" />
			<img className={styles.middleRight} src={mediumPillow.pillowImage} alt="Oreilles du milieu" />
			<img className={styles.front} src={smallPillow.pillowImage} alt="Petit Oreiller" />
			<img className={styles.couette} src={couette.couetteImage} alt="Couette" />
			</div>
			{props.menu ? (
					<Menu 
						onCouetteChange={handleCouetteChange}
						onSmallPillowChange={handleSmallPillowChange}
					  	onMediumPillowChange={handleMediumPillowChange}
						onLargePillowChange={handleLargePillowChange}
						onDrapChange={handleDrapChange}
						onDrapHousseChange={handleDrapHousseChange}
					    title={props.title}/>
				) : null}	
			{props.menuLeftDecor ? (
					<MenuLeftDecor 
						onWallChange={handleWallChange}
						onFloorChange={handleFloorChange}
						onJointChange={handleJointChange}/>) : null}	
			{props.addCart  ? (<AddCart couette={couette} smallPillow={smallPillow} mediumPillow={mediumPillow} largePillow={largePillow} drapPlat={drapPlat} drapHousse={drapHousse}/>) : null}
		</div>
	)
	function handleCouetteChange(couette){
		setCouette(couette);//set le state avec l'objet contenant les infos de la couette
	}

	function handleDrapChange(drapPlat){
		setDrapPlat(drapPlat);
	}
	function handleDrapHousseChange(drapHousse){
		setDrapHousse(drapHousse);
	}

	function handleSmallPillowChange(petitcoussin){
		setSmallPillow(petitcoussin);
	}

	function handleMediumPillowChange(moyencoussin){
		setMediumPillow(moyencoussin);
	}

	function handleLargePillowChange(grandcoussin){
		setLargePillow(grandcoussin);
	}

	//change le mur en fonction du mur selectionné 
	function handleWallChange(wall){
		setWall(wall);
	}
	//change le sol en fonction du sol selectionné 		
	function handleFloorChange(floor){
		setFloor(floor);
	}
	//change le joint en fonction du sol selectionné 
	function handleJointChange(joint){
		setJoint(joint);
	}

};



export default Bed;