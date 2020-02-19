import styles from './Bed.module.css';
import React, { useState } from 'react';
import Menu from './Menu'

const Bed = props => {

	const [couette, setCouette] = useState('/static/Bed/couette.png');
	const [petitcoussin, setPetitCoussin] = useState('/static/Bed/petitcoussin.png');

	return (
		<div className={styles.background}>
			<img className={styles.wall} src="/static/Bed/wall.png" alt="wall" />
			<img className={styles.joint} src="/static/Bed/joint.png" alt="joint" />
			<img className={styles.floor} src="/static/Bed/sol.png" alt="sol" />
			<img className={styles.tete} src="/static/Bed/tetedelit.png" alt="tete de lit" />
			<img className={styles.back} src="/static/Bed/groscoussins.png" alt="Grands Oreillers" />
			<img className={styles.middle} src="/static/Bed/moyencoussin.png" alt="Oreilles du milieu" />
			<img className={styles.front} src={petitcoussin} alt="Petit Oreiller" />
			<img className={styles.couette} src={couette} alt="couette" />
			{props.menu ? (
					<Menu onCouetteChange={handleCouetteChange} onSmallPillowChange={handleSmallPillowChange} title={props.title}/>
				) : null}		
		</div>
	)

	function handleCouetteChange(couette){
		setCouette(couette);
	}

	function handleSmallPillowChange(petitcoussin){
		setPetitCoussin(petitcoussin);
	}
};



export default Bed;