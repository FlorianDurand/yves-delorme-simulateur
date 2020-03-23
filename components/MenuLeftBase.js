import React from 'react'
import PropTypes from 'prop-types'
import styles from './MenuLeft.module.css';
import Button from './Styles/Button';

const MenuLeftBase = props => {
	
	return (

		<div className={styles.subSection}>
			<h2 className={styles.subtitle}>{props.name}</h2>
			{props.contents ? 
				(<div className={styles.contents}>
					{props.contents.map(content=>
						<button className={styles.button}> {content} </button>
					)}
				</div>) 
			: null } 

			{props.contentWalls ? 
				(<div className={styles.contents}>
					{props.contentWalls.map(contentWall=>
						<img onClick={() => {props.onWallChange(contentWall.image)}} className={styles.wallPreview} src={contentWall.imagePreview} alt="wall Preview" />
					)}
				</div>)
			: null }

			{props.contentFloors ? 
				(<div className={styles.contents}>
					{props.contentFloors.map(contentFloor=>
						<img onClick={() => {props.onFloorChange(contentFloor.image), props.onJointChange(contentFloor.joint)}} className={styles.floorPreview} src={contentFloor.imagePreview} alt="floor Preview" />
					)}
				</div>) 
			: null } 
			
		</div>
	)

};



export default MenuLeftBase;