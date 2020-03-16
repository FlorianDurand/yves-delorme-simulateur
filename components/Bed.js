import styles from './Bed.module.css';
import React, { useState } from 'react';
import Menu from './Menu'

const Bed = props => {

	const [couette, setCouette] = useState('/static/Bed/couette.png');
	const [smallPillow, setSmallPillow] = useState('/static/Bed/petitcoussin.png');
	const [mediumPillow, setMediumPillow] = useState('/static/Bed/moyencoussin.png');
	const [largePillow, setLargePillow] = useState('/static/Bed/groscoussin.png');

	return (
		<div className={styles.background} onClick={() => props.resetMenu()}>
			<img className={styles.wall} src="/static/Bed/wall.png" alt="wall" />
			<img className={styles.joint} src="/static/Bed/joint.png" alt="joint" />
			<img className={styles.floor} src="/static/Bed/sol.png" alt="sol" />
			<img className={styles.tete} src="/static/Bed/tetedelit.png" alt="tete de lit" />
			<img className={styles.back} src={largePillow} alt="Grands Oreillers" />
			<img className={styles.backRight} src={largePillow} alt="Grands Oreillers" />
			<img className={styles.middle} src={mediumPillow} alt="Oreilles du milieu" />
			<img className={styles.middleRight} src={mediumPillow} alt="Oreilles du milieu" />
			<img className={styles.front} src={smallPillow} alt="Petit Oreiller" />
			<img className={styles.couette} src={couette} alt="couette" />

			{props.menu ? (
					<Menu 
						onCouetteChange={handleCouetteChange}
						onSmallPillowChange={handleSmallPillowChange}
					  	onMediumPillowChange={handleMediumPillowChange}
					   	onLargePillowChange={handleLargePillowChange}
					    title={props.title}/>
				) : null}		
		</div>
	)

	function handleCouetteChange(couette){
		setCouette(couette);
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
};



export default Bed;