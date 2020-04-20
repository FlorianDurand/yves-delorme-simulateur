import fetch from 'isomorphic-unfetch'
import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuLeft from '../components/MenuLeft';
import MenuLeftDecor from '../components/MenuLeftDecor';


import styles from './index.module.css'

export default function Index({ collection }) {
	
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
			<div>YDL collection: {collection}</div>
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
	const res = await fetch('https://france.yvesdelorme.com/shell/digitalhome/flux/hetic/HeticProducts.php')
	const data = await res.json()
	console.log('new')
	console.log(data[2192])

	return { 
		collection: data[0].collection + data[1].collection 
	}
  }