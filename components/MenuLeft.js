import React from 'react'
import PropTypes from 'prop-types'
import styles from './MenuLeft.module.css';
import Button from './Styles/Button';
import MenuLeftBase from './MenuLeftBase';

const MenuLeft = () => {



	return (
		<div className={styles.menu}>
		<h1 className={styles.title}>Tailles</h1>
		<div className={styles.articles}>
			<MenuLeftBase name={'Taies'} contents={['31x42 cm','50x75 cm','54x75 cm','65x65 cm']} />
			<MenuLeftBase name={'Housse de couette'} contents={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']}  />
		</div>
		</div>
	)

};



export default MenuLeft;