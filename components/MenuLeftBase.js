import React from 'react'
import PropTypes from 'prop-types'
import styles from './MenuLeft.module.css';
import Button from './Styles/Button';

const MenuLeftBase = props => {

	return (
		<div className={styles.subSection}>
			<h2 className={styles.subtitle}>{props.name}</h2>
			<div className={styles.contents}>
				{props.contents.map(content=>
					<button className={styles.button}> {content} </button>
				)} 
			</div>
		</div>
	)

};



export default MenuLeftBase;