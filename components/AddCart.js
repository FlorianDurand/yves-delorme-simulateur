import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import Bed from './Bed'


import styles from './AddCart.module.css';

const AddCart = props => {

	const duvet = props.duvet;
	const smallPillow = props.smallPillow;
	const mediumPillow = props.mediumPillow;
	const bigPillow = props.bigPillow;
	const flatSheet = props.flatSheet;
	const fittedSheet = props.fittedSheet;
	const base = 'aucun';

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
				{bigPillow.pillowName != base ? 
					<CartItem 
						image={bigPillow.pillowImage} 
						name={bigPillow.pillowName} 
						color={"Blanc"} 
						widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
						number={2} />
					: null 
				}

				{mediumPillow.pillowName != base ?
					<CartItem 
						image={mediumPillow.pillowImage} 
						name={mediumPillow.pillowName} 
						color={"Blanc"} 
						widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
						number={2} />
					: null 
				}

				{smallPillow.pillowName != base ?
					<CartItem 
						image={smallPillow.pillowImage} 
						name={smallPillow.pillowName} 
						color={"Blanc"} 
						widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
						number={1} />
					: null 
				}

				{duvet.duvetName != base ? 
					<CartItem 
						image={duvet.duvetImage} 
						name={duvet.duvetName} 
						color={"Blanc"} 
						widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
						number={1} />
					: null 
				}				

				{flatSheet.sheetName != base ? 
					<CartItem 
						image={flatSheet.sheetImage} 
						name={flatSheet.sheetName} 
						color={"Blanc"} 
						widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
						number={1} />
					: null 
				}

				{fittedSheet.sheetName != base ? 
					<CartItem 
						image={fittedSheet.sheetImage} 
						name={fittedSheet.sheetName} 
						color={"Blanc"} 
						widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
						number={1} />
					: null 
				}
					
			</div>
		</div>
	)
};

export default AddCart;