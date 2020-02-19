import React, { useState } from 'react';
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

const articlesTaiesPetit = [
	{
		name : 'escale',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Satin - 120 fil/m²',
		taiesPetit: '/static/Bed/petitcoussin2.png'
	},
	{
		name : 'calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		taiesPetit: '/static/Bed/petitcoussin2.png'
	},
	{
		name : 'palmea',
		image : '/static/MenuTaies/coussin3.png',
		description: 'Coton - 120 fil/m²',
		taiesPetit: '/static/Bed/petitcoussin.png'
	}
]

const articlesTaiesMoyen = [
	{
		name : 'palmea',
		image : '/static/MenuTaies/coussin3.png',
		description: 'Coton - 120 fil/m²',
		taiesMoyen: '/static/Bed/moyencoussin.png'
	},
	{
		name : 'escale',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Satin - 120 fil/m²',
		taiesMoyen: '/static/Bed/moyencoussin2.png'
	},
	{
		name : 'calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		taiesMoyen: '/static/Bed/moyencoussin2.png'
	}
	
]

const articlesTaiesGrand = [
	{
		name : 'calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		taiesGrand: '/static/Bed/groscoussin2.png'
	},
	{
		name : 'escale',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Satin - 120 fil/m²',
		taiesGrand: '/static/Bed/groscoussin2.png'
	},
	
	{
		name : 'palmea',
		image : '/static/MenuTaies/coussin3.png',
		description: 'Coton - 120 fil/m²',
		taiesGrand: '/static/Bed/groscoussin.png'
	}
]


const Menu = props => {

	const [sizePillow, setSizePillow] = useState("grand");
	
	return(
		<div className={styles.menu}>
		<h1 className={styles.title}>{props.title}</h1>
		<Filter />	
		{props.title == 'Taies' ? 
			<div>
				<div className={styles.pillowSelector}>
					<img src="/static/MenuTaies/groscoussin.png" alt="gros coussin" onClick={() => setSizePillow('grand') }/>
					<img src="/static/MenuTaies/groscoussin.png" alt="gros coussin" onClick={() => setSizePillow('grand') }/>
					<img src="/static/MenuTaies/groscoussin.png" alt="gros coussin" onClick={() => setSizePillow('moyen') }/>
					<img src="/static/MenuTaies/groscoussin.png" alt="gros coussin" onClick={() => setSizePillow('moyen') }/>
					<img src="/static/MenuTaies/petitcoussin.png" alt="petit coussin" onClick={() => setSizePillow('petit') }/>
				</div>
				{sizePillow == 'petit' ? 
					<div className={styles.articles}>			
						{articlesTaiesPetit.map(article=>
							<Article onSmallPillowChange={props.onSmallPillowChange} {...article }  key={article.name} />
						)} 
					</div>
				: sizePillow == 'moyen' ? 
					<div className={styles.articles}>			
						{articlesTaiesMoyen.map(article=>
							<Article onMediumPillowChange={props.onMediumPillowChange} {...article }  key={article.name} />
						)} 
					</div>
				: 
					<div className={styles.articles}>			
						{articlesTaiesGrand.map(article=>
							<Article onLargePillowChange={props.onLargePillowChange} {...article }  key={article.name} />
						)} 
					</div>
				}
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