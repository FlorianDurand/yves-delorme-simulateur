import styles from './Bed.module.css';
import React, { useState } from 'react';
import Menu from './Menu'
import MenuLeftDecor from './MenuLeftDecor';
import AddCart from '../components/AddCart';

const Bed = props => {

	const [duvet, setDuvet] = useState({ duvetImage : '/static/Bed/couette2.png', duvetName : 'aucun'});
	const [flatSheet, setFlatSheet] = useState({ sheetImage : '', sheetName : 'aucun'});
	const [fittedSheet, setFittedSheet] = useState({ sheetImage : '', sheetName : 'aucun'});
	const [smallPillow, setSmallPillow] = useState({ pillowImage : '/static/Bed/petitcoussin.png', pillowName : 'aucun'});
	const [centerPillow, setCenterPillow] = useState({ pillowImage : '/static/Bed/centrecoussin.png', pillowName : 'aucun'});
	const [mediumPillow, setMediumPillow] = useState({ pillowImage :'/static/Bed/moyencoussin.png', pillowName : 'aucun'} );
	const [bigPillow, setBigPillow] = useState({pillowImage : '/static/Bed/groscoussin.png', pillowName : 'aucun'});
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
				<img className={styles.back} src={bigPillow.pillowImage} alt="Grands Oreillers" />
				<img className={styles.backRight} src={bigPillow.pillowImage} alt="Grands Oreillers" />
				<img className={styles.middle} src={mediumPillow.pillowImage} alt="Oreilles du milieu" />
				<img className={styles.middleRight} src={mediumPillow.pillowImage} alt="Oreilles du milieu" />
				<img className={styles.frontCenter} src={centerPillow.pillowImage} alt="Centre Oreiller" />
				<img className={styles.front} src={smallPillow.pillowImage} alt="Petit Oreiller" />
				<img className={styles.duvet} src={duvet.duvetImage} alt="Couette" />
			</div>
		

			{props.menu ? (
				<Menu 
					onDuvetChange={handleDuvetChange}
					onSmallPillowChange={handleSmallPillowChange}
					onCenterPillowChange={handleCenterPillowChange}
					onMediumPillowChange={handleMediumPillowChange}
					onBigPillowChange={handleBigPillowChange}
					onFlatSheetChange={handleFlatSheetChange}
					onFittedSheetChange={handleFittedSheetChange}
					title={props.title}/>
				) : null}

			{props.menuLeftDecor ? (
				<MenuLeftDecor 
					onWallChange={handleWallChange}
					onFloorChange={handleFloorChange}
					onJointChange={handleJointChange}/>
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
	//Gère le changement de la couette
	function handleDuvetChange(duvet){
		setDuvet(duvet); //set le state avec l'objet contenant les infos de la couette
	}

	//Gère le changement du drap plat
	function handleFlatSheetChange(flatSheet){
		setFlatSheet(flatSheet);
	}

	//Gère le changement du drap-housse
	function handleFittedSheetChange(fittedSheet){
		setFittedSheet(fittedSheet);
	}

	//Gère le changement du coussin de devant
	function handleSmallPillowChange(smallPillow){
		setSmallPillow(smallPillow);
	}

	//Gère le changement du coussin de devant qui est derriere celui de tout devant
	function handleCenterPillowChange(centerPillow){
		setCenterPillow(centerPillow);
	}


	//Gère le changement des coussins du milieu
	function handleMediumPillowChange(mediumPillow){
		setMediumPillow(mediumPillow);
	}

	//Gère le changement des coussins du fond
	function handleBigPillowChange(bigPillow){
		setBigPillow(bigPillow);
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