import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuLeft from '../components/MenuLeft';
import AddCart from '../components/AddCart';

import styles from './index.module.css'

export default function Index() {
	
  const [menu, setMenu] = useState(false);
  const [menuLeft, setMenuLeft] = useState(false);
  const [typeArticle, setTypeArticle] = useState('');

    return (
      <div className={styles.background}>
        <Header toggleMenuLeft={toggleMenuLeft}/>
        <Bed menu = {menu} title={typeArticle}/>
        {menuLeft ? (<MenuLeft />) : null}
		{/* <AddCart /> */}
        <Footer toggleMenu={toggleMenu} />
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
}
