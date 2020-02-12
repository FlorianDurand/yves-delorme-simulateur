import React from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.module.css';
import Button from './Styles/Button';
import Filter from './Filter';
import Article from './Article';

const articles = [
	{
		name : 'escale',
		image : '/static/escale.png',
		description: 'Satin - 120 fil/m²',
		couette: '/static/Bed/couette2.png'
	},
	{
		name : 'calypso',
		image : '/static/article.png',
		description: 'Coton - 120 fil/m²',
		couette: '/static/Bed/couette.png'
	},
	{
		name : 'palmea',
		image : '/static/palmea.png',
		description: 'Coton - 120 fil/m²',
		couette: '/static/Bed/couette.png'
	}

]

const Menu = props => {
	return(
		<div className={styles.menu}>
		<h1 className={styles.title}>Housse de couette</h1>
		<Filter />
		<div className={styles.articles}>
			{articles.map(article=>
					<Article onCouetteChange={props.onCouetteChange} {...article }  key={article.name} />
				)} 
		</div>
		</div>
	)
};

export default Menu;