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
			<MenuLeftBase name={'Taies'} contents={['3x2','8x3','8x3','8x3','8x3']} column={"187px"} />
			<MenuLeftBase name={'Housse de couette'} contents={['3x2','8x3','8x3','8x3','8x3']} column={"225px"} />
		</div>
		</div>
	)

};



export default MenuLeft;