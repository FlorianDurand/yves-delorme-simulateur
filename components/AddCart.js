import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import Bed from './Bed'


import styles from './AddCart.module.css';

const AddCart = () => {

	return(
		<div className={styles.addcart} >
			<div className={styles.header} >
				<input type="text" placeholder="Parure 1"></input>
			</div>
			<div className={styles.background} >
				<img className={styles.preview} src="/static/preview-panier.png" alt="preview" />
			</div>
			<div className={styles.cartContent} >
				<div className={styles.subtitle} >
					Composition de la parure
				</div>
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={3} />
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={4} />
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={1} />
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={2} />
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={2} />
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={2} />
				<CartItem name={'Housse couette Calypso'} color={"Blanc"} widths={['140x200 cm','140x220 cm','200x200 cm','200x220 cm', '240x220 cm', '260x240 cm']} number={2} />

			</div>
		</div>
	)


};



export default AddCart;