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
					// onDuvetChange={handleDuvetChange}
					// onSmallPillowChange={handleSmallPillowChange}
					// onCenterPillowChange={handleCenterPillowChange}
					// onMediumPillowChange={handleMediumPillowChange}
					// onBigPillowChange={handleBigPillowChange}
					// onFlatSheetChange={handleFlatSheetChange}
					// onFittedSheetChange={handleFittedSheetChange}
					onItemChange={handleItemChange}
					typeItem={props.typeItem}
					title={props.title}/>
				) : null}

			{props.menuLeftDecor ? (
				<MenuLeftDecor 
					// onWallChange={handleWallChange}
					// onFloorChange={handleFloorChange}
					// onJointChange={handleJointChange}
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

	// //Gère le changement de la couette
	// function handleDuvetChange(duvet){
	// 	setDuvet(duvet); //set le state avec l'objet contenant les infos de la couette
	// }

	// //Gère le changement du drap plat
	// function handleFlatSheetChange(flatSheet){
	// 	setFlatSheet(flatSheet);
	// }

	// //Gère le changement du drap-housse
	// function handleFittedSheetChange(fittedSheet){
	// 	setFittedSheet(fittedSheet);
	// }

	// //Gère le changement du coussin de devant
	// function handleSmallPillowChange(smallPillow){
	// 	setSmallPillow(smallPillow);
	// }

	// //Gère le changement du coussin de devant qui est derriere celui de tout devant
	// function handleCenterPillowChange(centerPillow){
	// 	setCenterPillow(centerPillow);
	// }


	// //Gère le changement des coussins du milieu
	// function handleMediumPillowChange(mediumPillow){
	// 	setMediumPillow(mediumPillow);
	// }

	// //Gère le changement des coussins du fond
	// function handleBigPillowChange(bigPillow){
	// 	setBigPillow(bigPillow);
	// }

	// //change le mur en fonction du mur selectionné 
	// function handleWallChange(wall){
	// 	setWall(wall);
	// }
	// //change le sol en fonction du sol selectionné 		
	// function handleFloorChange(floor){
	// 	setFloor(floor);
	// }
	// //change le joint en fonction du sol selectionné 
	// function handleJointChange(joint){
	// 	setJoint(joint);
	// }

};



export default Bed;