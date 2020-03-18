import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import Bed from './Bed'


import styles from './AddCart.module.css';

const AddCart = props => {

	const couette = props.couette;
	const smallPillow = props.smallPillow;
	const mediumPillow = props.mediumPillow;
	const largePillow = props.largePillow;
	const drapPlat = props.drapPlat;
	const drapHousse = props.drapHousse;
	const base = 'aucun'
	return(
		<div className={styles.addcart} >
			<div className={styles.header}>
				<input type="text" placeholder="Parure 1"></input>
			</div>
			<div className={styles.background} >
				<img className={styles.preview} src="/static/preview-panier.png" alt="preview" />
			</div>
			<div className={styles.cartContent} >
				<div className={styles.subtitle} >
					Composition de la parure
				</div>
				{/* Check si .elementName est différent de celui de base et l'affiche si oui */}
				{largePillow.pillowName != base ? <CartItem image={largePillow.pillowImage} name={largePillow.pillowName} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={2} />: null }
				{mediumPillow.pillowName != base ? <CartItem image={mediumPillow.pillowImage} name={mediumPillow.pillowName} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={2} />: null }
				{smallPillow.pillowName != base ? <CartItem image={smallPillow.pillowImage} name={smallPillow.pillowName} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={1} />: null }
				{couette.couetteName != base ? <CartItem image={couette.couetteImage} name={couette.couetteName} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={1} />: null }
				{drapPlat.drapName != base ? <CartItem image={drapPlat.drapImage} name={drapPlat.drapName} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={1} />: null }
				{drapHousse.drapName != base ? <CartItem image={drapHousse.drapImage} name={drapHousse.drapName} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={1} />: null }

			</div>
		</div>
	)



};



export default AddCart;