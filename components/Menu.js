import React from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.module.css';
import Button from './Styles/Button';
import Filter from './Filter';
import Article from './Article';

const articlesCouette = [
	{
		name : 'escale',
		image : '/static/MenuCouettes/escale.png',
		description: 'Satin - 120 fil/m²',
		couette: '/static/Bed/couette2.png'
	},
	{
		name : 'calypso',
		image : '/static/MenuCouettes/article.png',
		description: 'Coton - 120 fil/m²',
		couette: '/static/Bed/couette.png'
	},
	{
		name : 'palmea',
		image : '/static/MenuCouettes/palmea.png',
		description: 'Coton - 120 fil/m²',
		couette: '/static/Bed/couette.png'
	}

]

const articlesTaies = [
	{
		name : 'escale',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Satin - 120 fil/m²',
		taies: '/static/Bed/petitcoussin2.png'
	},
	{
		name : 'calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		taies: '/static/Bed/petitcoussin2.png'
	},
	{
		name : 'palmea',
		image : '/static/MenuTaies/coussin3.png',
		description: 'Coton - 120 fil/m²',
		taies: '/static/Bed/petitcoussin.png'
	}

]


const Menu = props => {

	
	return(
		<div className={styles.menu}>
		<h1 className={styles.title}>{props.title}</h1>
		<Filter />	
		{props.title == 'Taies' ? 
			<div className={styles.articles}>			
				{articlesTaies.map(article=>
					<Article onSmallPillowChange={props.onSmallPillowChange} {...article }  key={article.name} />
				)} 
			</div>
		: 		
			<div className={styles.articles}>			
				{articlesCouette.map(article=>
					<Article onCouetteChange={props.onCouetteChange} {...article }  key={article.name} />
				)} 
			</div> 
		}	
		</div>
	)
};

export default Menu;