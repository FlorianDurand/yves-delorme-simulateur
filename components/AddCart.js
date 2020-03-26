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
		<div>
			<div className={styles.addcart} onClick={() => props.reset()}></div>
			<div className={styles.addcartContent}>
				<div className={styles.header}>
					<input type="text" placeholder="Parure 1"></input>
				</div>

				<div className={styles.background} >
					<img className={styles.preview} src={props.preview} alt="preview" />
				</div>

				<div className={styles.cartContent} >
					<div className={styles.subtitle} >
						Composition de la parure
					</div>

					{/* Check si .elementName est différent de celui de base et l'affiche si oui */}
					{bigPillow.name != base ? 
						<CartItem 
							image={bigPillow.image} 
							name={bigPillow.name} 
							color={"Blanc"} 
							widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
							number={2} />
						: null 
					}

					{mediumPillow.name != base ?
						<CartItem 
							image={mediumPillow.image} 
							name={mediumPillow.name} 
							color={"Blanc"} 
							widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
							number={2} />
						: null 
					}

					{smallPillow.name != base ?
						<CartItem 
							image={smallPillow.image} 
							name={smallPillow.name} 
							color={"Blanc"} 
							widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
							number={1} />
						: null 
					}

					{duvet.name != base ? 
						<CartItem 
							image={duvet.image} 
							name={duvet.name} 
							color={"Blanc"} 
							widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
							number={1} />
						: null 
					}				

					{flatSheet.name != base ? 
						<CartItem 
							image={flatSheet.image} 
							name={flatSheet.name} 
							color={"Blanc"} 
							widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
							number={1} />
						: null 
					}

					{fittedSheet.name != base ? 
						<CartItem 
							image={fittedSheet.image} 
							name={fittedSheet.name} 
							color={"Blanc"} 
							widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} 
							number={1} />
						: null 
					}
						
				</div>
			</div>
		</div>
		
	)
};

export default AddCart;