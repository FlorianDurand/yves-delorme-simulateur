import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuLeft from '../components/MenuLeft';

import styles from './index.module.css'

export default function Index() {
	
  const [menu, setMenu] = useState(false);
  const [menuLeft, setMenuLeft] = useState(false);

    return (
      <div className={styles.background}>
        <Header toggleMenuLeft={toggleMenuLeft}/>
        <Bed menu = {menu}/>
        {menuLeft ? (<MenuLeft />) : null}
        <Footer toggleMenu={toggleMenu} />
      </div>
	);
	
	function toggleMenu(){
		if(!menu){
			setMenu(true);
		}
		else{
			setMenu(false)
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
