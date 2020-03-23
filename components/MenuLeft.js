import React from 'react'
import PropTypes from 'prop-types'
import styles from './MenuLeft.module.css';
import MenuLeftBase from './MenuLeftBase';

const MenuLeft = () => {

	return (
		<div className={styles.menu}>
		<h1 className={styles.title}>Tailles</h1>
		<div className={styles.articles}>
			<MenuLeftBase name={'Taies'} contents={['31x42 cm','50x75 cm','54x75 cm','65x65 cm']} />
			<MenuLeftBase name={'Housse de couette'} contents={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']}  />
			<MenuLeftBase name={'Draps plat'} contents={['180x295 cm','240x295 cm','270x295 cm']}  />
			<MenuLeftBase name={'Draps housse'} contents={['140x200 cm','160x200 cm','180x200 cm','200x200 cm','200x220 cm']}  />
		</div>
		<div className={styles.barre}><div className={styles.littleRectangle}></div></div>
		</div>
	)

};



export default MenuLeft;