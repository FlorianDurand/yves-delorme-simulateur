import styles from './Bed.module.css';

const Bed = () => (
	<div className={styles.background}>
		<img className={styles.wall} src="/static/Bed/wall.png" alt="wall" />
		<img className={styles.joint} src="/static/Bed/joint.png" alt="joint" />
		<img className={styles.floor} src="/static/Bed/sol.png" alt="sol" />
		<img className={styles.tete} src="/static/Bed/tetedelit.png" alt="tete de lit" />
		<img className={styles.couette} src="/static/Bed/couette.png" alt="couette" />
		<img className={styles.back} src="/static/Bed/groscoussins.png" alt="Grands Oreillers" />
		<img className={styles.middle} src="/static/Bed/moyencoussin.png" alt="Oreilles du milieu" />
		<img className={styles.front} src="/static/Bed/petitcoussin.png" alt="Petit Oreiller" />
	</div>
);

export default Bed;