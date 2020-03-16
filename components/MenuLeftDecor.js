import React from 'react'
import PropTypes from 'prop-types'
import styles from './MenuLeft.module.css';
import Button from './Styles/Button';
import MenuLeftBase from './MenuLeftBase';

const MenuLeftDecor = () => {



	return (
		<div className={styles.menu}>
		<h1 className={styles.title}>Décor</h1>
		<div className={styles.articles}>
			<MenuLeftBase name={'Mur'} contents={['31x42 cm','50x75 cm','54x75 cm','65x65 cm']} />
			<MenuLeftBase name={'Sol'}  />
		</div>
		<div className={styles.barre}><div className={styles.littleRectangle}></div></div>
		</div>
	)

};



export default MenuLeftDecor;