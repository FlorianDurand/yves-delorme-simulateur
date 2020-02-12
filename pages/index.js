import Header from '../components/Header';
import Bed from '../components/Bed';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuLeft from '../components/MenuLeft';

import styles from './index.module.css'

export default function Index() {
	
	const [menu, setMenu] = useState(false);
    return (
      <div className={styles.background}>
        <Header />
        <Bed menu = {menu}/>
        {/* <MenuLeft /> */}
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
}
