import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './Menu.module.css';
import Button from './Styles/Button';
import Filter from './Filter';
import Article from './Article';

const articlesDuvet = [	
	{
		name : 'Aucun',
		image : '/static/none.svg',
		description: '',
		duvet: '/static/Bed/none.png',
		id: "0"
	},
	{
		name : 'Escale',
		image : '/static/MenuCouettes/escale.png',
		description: 'Satin - 120 fil/m²',
		duvet: '/static/Bed/couette2.png',
		id: "1"
	},
	{
		name : 'Calypso',
		image : '/static/MenuCouettes/article.png',
		description: 'Coton - 120 fil/m²²',
		duvet: '/static/Bed/couette.png',
		id: "2"
	}

]

const articlesSmallPillow = [
	{
		name : 'Escale',
		image : '/static/MenuTaies/coussin3.png',
		description: 'Satin - 120 fil/m²',
		smallPillow: '/static/Bed/petitcoussin.png',
		id: "0"
	},
	{
		name : 'Calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		smallPillow: '/static/Bed/petitcoussin3.png',
		id: "1"
	},
	{
		name : 'Palmea',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Coton - 120 fil/m²',
		smallPillow: '/static/Bed/petitcoussin2.png',
		id: "2"
	}
]

const articlesMediumPillow = [
	{
		name : 'Palmea',
		image : '/static/MenuTaies/coussin3.png',
		description: 'Coton - 120 fil/m²',
		mediumPillow: '/static/Bed/moyencoussin.png',
		id: "0"
	},
	{
		name : 'Escale',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Satin - 120 fil/m²',
		mediumPillow: '/static/Bed/moyencoussin2.png',
		id: "1"
	},
	{
		name : 'Calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		mediumPillow: '/static/Bed/moyencoussin3.png',
		id: "2"
	}
	
]

const articlesBigPillow = [
	{
		name : 'Calypso',
		image : '/static/MenuTaies/coussin2.png',
		description: 'Coton - 120 fil/m²',
		bigPillow: '/static/Bed/groscoussin.png',
		id: "0"
	},
	{
		name : 'Escale',
		image : '/static/MenuTaies/coussin1.png',
		description: 'Satin - 120 fil/m²',
		bigPillow: '/static/Bed/groscoussin2.png',
		id: "1"
	}
]
const articlesFlatSheet = [
	{
		name : 'Aucun',
		image : '/static/none.svg',
		description: '',
		flatSheet: '/static/Bed/none.png',
		id: "0"
	},
	{
		name : 'Drap plat calypso',
		description: 'Un beau drap',
		image: '/static/MenuDrap/drap1.png',
		flatSheet: '/static/MenuDrap/drap1.png',
		id: "1"
	},
	{
		name : 'Drap plat escale',
		image: '/static/MenuDrap/drap1.png',
		description: 'Un très beau drap ',
		flatSheet: '/static/MenuDrap/drap1.png',
		id: "2"
	},
]
const articlesFittedSheet = [
	{
		name : 'Aucun',
		image : '/static/none.svg',
		description: '',
		fittedSheet: '/static/Bed/none.png',
		id: "0"
	},
	{
		name : 'Drap Housse 1',
		description: 'Un beau drap',
		image: '/static/MenuDrap/drap1.png',
		fittedSheet: '/static/MenuDrap/drap1.png',
		id: "1"
	},
	{
		name : 'Drap Housse 2',
		image: '/static/MenuDrap/drap1.png',
		description: 'Un très beau drap ',
		fittedSheet: '/static/MenuDrap/drap1.png',
		id: "2"
	},
]


const Menu = props => {

	const [sizePillow, setSizePillow] = useState("big");
	const [activeBigPillow,setActiveBigPillow] = useState(true);
	const [activeMediumPillow,setActiveMediumPillow] = useState(false);
	const [activeLittlePillow,setActiveLittlePillow] = useState(false);
	const [idActiveDuvetArticle,setIdActiveDuvetArticle] = useState("1");
	const [idActiveBigPillowArticle,setIdActiveBigPillowArticle] = useState("0");
	const [idActiveMediumPillowArticle,setIdActiveMediumPillowArticle] = useState("0");
	const [idActiveSmallPillowArticle,setIdActiveSmallPillowArticle] = useState("0");
	const [idActiveFlatSheetArticle,setIdActiveFlatSheetArticle] = useState("0");
	const [idActiveFittedSheetArticle,setIdActiveFittedSheetArticle] = useState("0");


	return(
		<div className={styles.menu}>
			<h1 className={styles.title}>{props.title}</h1>
			<Filter />	
			{props.title == 'Taies' ? 
				<div>
					<div className={styles.pillowSelector}>
						{activeBigPillow ?
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('big') }>
								<path className={styles.bluePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
							:
							
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('big') }>
								<path className={styles.whitePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
						}

						{activeBigPillow ?
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('big') }>
								<path className={styles.bluePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
							:
							
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('big') }>
								<path className={styles.whitePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
						}

						{activeMediumPillow ?
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('medium') }>
								<path className={styles.bluePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
							:							
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('medium') }>
								<path className={styles.whitePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
						}

						{activeMediumPillow ?
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('medium') }>
								<path className={styles.bluePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
							:							
							<svg  width="155" height="128" viewBox="0 0 155 128" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('medium') }>
								<path className={styles.whitePillow} d="M77.6144 6.02356L77.6788 6.02772L77.7432 6.02356L149.357 1.40334C151.787 1.24657 153.792 3.27899 153.602 5.70659L149.09 63.459C149.066 63.77 149.066 64.0825 149.09 64.3936L153.602 122.146C153.792 124.574 151.787 126.606 149.357 126.449L77.7432 121.829L77.6788 121.825L77.6144 121.829L6.04625 126.446C3.60381 126.604 1.59384 124.551 1.80341 122.112L6.7596 64.44C6.78898 64.0982 6.78898 63.7544 6.7596 63.4125L1.80341 5.74045C1.59384 3.30193 3.60381 1.24868 6.04625 1.40626L77.6144 6.02356Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
							</svg>
						}

						{activeLittlePillow ?
							<div>
								<svg width="95" height="80" viewBox="0 0 95 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('little')}>
									<path className={styles.bluePillow} d="M47.4496 4.65135L47.5161 4.65578L47.5825 4.65135L88.4378 1.93092C90.8668 1.76918 92.8759 3.79652 92.6921 6.224L90.1489 39.8221C90.1261 40.1236 90.1261 40.4264 90.1489 40.7279L92.6921 74.326C92.8759 76.7535 90.8668 78.7808 88.4378 78.6191L47.5825 75.8987L47.5161 75.8942L47.4496 75.8987L6.63832 78.6161C4.19717 78.7787 2.18335 76.7312 2.38636 74.2931L5.17741 40.7729C5.205 40.4415 5.205 40.1085 5.17741 39.7771L2.38636 6.25692C2.18335 3.8188 4.19717 1.7713 6.63832 1.93385L47.4496 4.65135Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
								</svg>
							</div>
							:
							<div>
								<svg width="95" height="80" viewBox="0 0 95 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => activePillow('little')}>
									<path className={styles.whitePillow} d="M47.4496 4.65135L47.5161 4.65578L47.5825 4.65135L88.4378 1.93092C90.8668 1.76918 92.8759 3.79652 92.6921 6.224L90.1489 39.8221C90.1261 40.1236 90.1261 40.4264 90.1489 40.7279L92.6921 74.326C92.8759 76.7535 90.8668 78.7808 88.4378 78.6191L47.5825 75.8987L47.5161 75.8942L47.4496 75.8987L6.63832 78.6161C4.19717 78.7787 2.18335 76.7312 2.38636 74.2931L5.17741 40.7729C5.205 40.4415 5.205 40.1085 5.17741 39.7771L2.38636 6.25692C2.18335 3.8188 4.19717 1.7713 6.63832 1.93385L47.4496 4.65135Z" fill="white" stroke="#ADADAD" stroke-width="2"/>
								</svg>
							</div>
						}
						
					</div>
					{sizePillow == 'petit' ? 
						<div className={styles.articles}>			
							{articlesSmallPillow.map(article=>
								<Article idActiveArticle={idActiveBigPillowArticle} onArticleChange={onArticleBigPillowChange} onSmallPillowChange={props.onSmallPillowChange} {...article }  key={article.name} />
							)} 
						</div>
					: sizePillow == 'moyen' ? 
						<div className={styles.articles}>			
							{articlesMediumPillow.map(article=>
								<Article idActiveArticle={idActiveMediumPillowArticle} onArticleChange={onArticleMediumPillowChange} onMediumPillowChange={props.onMediumPillowChange} {...article }  key={article.name} />
							)} 
						</div>
					: 
						<div className={styles.articles}>			
							{articlesBigPillow.map(article=>
								<Article idActiveArticle={idActiveSmallPillowArticle} onArticleChange={onArticleSmallPillowChange} onBigPillowChange={props.onBigPillowChange} {...article }  key={article.name} />
							)} 
						</div>
					}
				</div>
			: props.title == 'Drap plat' ?
				<div className={styles.articles}>			
						{articlesFlatSheet.map(article=>
							<Article idActiveArticle={idActiveFlatSheetArticle} onArticleChange={onArticleFlatSheetChange} onFlatSheetChange={props.onFlatSheetChange} {...article }  key={article.id} />
						)} 
				</div> 	 
			: props.title == 'Drap housse' ?
			<div className={styles.articles}>			
					{articlesFittedSheet.map(article=>
						<Article idActiveArticle={idActiveFittedSheetArticle} onArticleChange={onArticleFittedSheetChange} onFittedSheetChange={props.onFittedSheetChange} {...article }  key={article.id} />
					)} 
			</div> 	 
			: 	props.title == 'Housse de couette' ?
				<div className={styles.articles}>			
					{articlesDuvet.map(article=>
						<Article idActiveArticle={idActiveDuvetArticle} onArticleChange={onArticleDuvetChange} onDuvetChange={props.onDuvetChange} {...article }  key={article.name} />
					)} 
				</div> 		
				: null
			}	
		</div>

		
	)

	function activePillow(size) {
		if(size == 'big'){
			setActiveBigPillow(true);
			setActiveMediumPillow(false);
			setActiveLittlePillow(false);

			setSizePillow('big');			
		}
		else if(size == 'medium'){
			setActiveBigPillow(false);
			setActiveMediumPillow(true);
			setActiveLittlePillow(false);

			setSizePillow('medium');	
		}
		else{
			setActiveBigPillow(false);
			setActiveMediumPillow(false);
			setActiveLittlePillow(true);

			setSizePillow('small');	
		}
		
	}

	function onArticleDuvetChange(id){
		setIdActiveDuvetArticle(id);
	}

	function onArticleBigPillowChange(id){
		setIdActiveBigPillowArticle(id);
	}

	function onArticleMediumPillowChange(id){
		setIdActiveMediumPillowArticle(id);
	}

	function onArticleSmallPillowChange(id){
		setIdActiveSmallPillowArticle(id);
	}

	function onArticleFlatSheetChange(id){
		setIdActiveFlatSheetArticle(id);
	}

	function onArticleFittedSheetChange(id){
		setIdActiveFittedSheetArticle(id);
	}
};

export default Menu;