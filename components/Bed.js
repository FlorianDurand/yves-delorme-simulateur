import styles from './Bed.module.css';
import React, { useState } from 'react';
import Menu from './Menu'

const Bed = () => {

	const [couette, setCouette] = useState('/static/Bed/couette.png');


	return (
		<div className={styles.background}>
			<img className={styles.wall} src="/static/Bed/wall.png" alt="wall" />
			<img className={styles.joint} src="/static/Bed/joint.png" alt="joint" />
			<img className={styles.floor} src="/static/Bed/sol.png" alt="sol" />
			<img className={styles.tete} src="/static/Bed/tetedelit.png" alt="tete de lit" />
			<img className={styles.couette} src={couette} alt="couette" />
			<img className={styles.back} src="/static/Bed/groscoussins.png" alt="Grands Oreillers" />
			<img className={styles.middle} src="/static/Bed/moyencoussin.png" alt="Oreilles du milieu" />
			<img className={styles.front} src="/static/Bed/petitcoussin.png" alt="Petit Oreiller" />
			{/* <Menu onCouetteChange={handleCouetteChange} /> */}
		</div>
	)

	function handleCouetteChange(couette){
		setCouette(couette);
	}
};



export default Bed;