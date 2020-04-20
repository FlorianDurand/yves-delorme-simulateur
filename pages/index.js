import fetch from 'isomorphic-unfetch'
import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuLeft from '../components/MenuLeft';
import MenuLeftDecor from '../components/MenuLeftDecor';


import styles from './index.module.css'

export default function Index({ productInfos, productVisu }) {
	
	const [menu, setMenu] = useState(false);
	const [menuLeft, setMenuLeft] = useState(false);
	const [menuLeftDecor, setMenuLeftDecor] = useState(false);
	const [addCart, setAddCart] = useState(false);
	const [typeArticle, setTypeArticle] = useState('');
  
	return (
		<div className={styles.background}>
			<Header toggleMenuLeft={toggleMenuLeft} toggleMenuLeftDecor={toggleMenuLeftDecor}/>
			<Bed menu = {menu} addCart={addCart} menuLeftDecor={menuLeftDecor} title={typeArticle} resetMenu={resetMenu}/>
			{menuLeft ? (<MenuLeft />) : null}
			<div>YDL collections: { productInfos.collection }</div>
			{/* <div>YDL visu: { productVisu.bedlinen_sku }</div> */}
			<Footer toggleMenu={toggleMenu} toggleCart={toggleCart} />
		</div>
	);
		
	function toggleMenu(type){
		if(!menu){
			setMenu(true);
			setTypeArticle(type)
		}
		else{
			if(typeArticle != type){				
				setTypeArticle(type)
			}
			else{
				setMenu(false)
				setTypeArticle(type)
			}			  
		}		
	}

	function toggleMenuLeft(){
		if(!menuLeft){
			setMenuLeft(true);
		}
		else{
			setMenuLeft(false)
		}		
	}

	function toggleMenuLeftDecor(){
		if(!menuLeftDecor){
			setMenuLeftDecor(true);
		}
		else{
			setMenuLeftDecor(false)
		}		
	}

	function toggleCart(){
		if(!addCart){
			setAddCart(true);
		}
		else{
			setAddCart(false)
		}		
	}

	function resetMenu(){
		setAddCart(false)
		setMenuLeft(false)
		setMenu(false)
		setMenuLeftDecor(false)
	}
}

Index.getInitialProps = async ctx => {
	const res = await fetch('https://france.yvesdelorme.com/bedlinenconfigurator/products/get')
	const productInfos = await res.json()

	const visu = await fetch('https://france.yvesdelorme.com/bedlinenconfigurator/products/getDefault')
	const productVisu = await visu.json()

	const getAllParure = await fetch('https://france.yvesdelorme.com/bedlinenconfigurator/selection/get')	
	const getParure = await getAllParure.json()

	const addParureDefault = await fetch('https://france.yvesdelorme.com/bedlinenconfigurator/selection/add')	
	const addParure = await addParureDefault.json()

	const addPanierDefault = await fetch('https://france.yvesdelorme.com/bedlinenconfigurator/cart/add')	
	const addPanier = await addPanierDefault.json()
	
	console.log(productVisu)

	return { 
		productInfos: productInfos[0],
		productVisu: productVisu[0]
	}
  }