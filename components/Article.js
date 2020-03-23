import React, { useState } from 'react';
import PropTypes from 'prop-types'

import styles from './Article.module.css'

const Article = props => {
	let duvet = props.duvet;
	
    return(
        <div>
        { duvet != null ? 

            props.idActiveArticle == props.id ?
                // Recupère les différentes informations de l element et les passent à la fonction onDuvetChange
                <div className={`${styles.article} ${styles.articleActive}`}  >
                    <img className={styles.image} src={props.image} />
                    <h2 className={styles.subtitle}>{props.name}</h2>
                    <p className={styles.description}>{props.description}</p>
                </div>

            :

                <div className={`${styles.article}`}  onClick={() => {props.onDuvetChange({duvetImage : props.duvet,  duvetName : props.name}), props.onArticleChange(props.id)}}>
                    <img className={styles.image} src={props.image} />
                    <h2 className={styles.subtitle}>{props.name}</h2>
                    <p className={styles.description}>{props.description}</p>
                </div>

		: props.smallPillow != null ?
		
			props.idActiveArticle == props.id ?

            <div className={`${styles.article} ${styles.articleActive}`}  >
                <img className={styles.image} src={props.image} />
                <h2 className={styles.subtitle}>{props.name}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>

			:

			<div className={styles.article} onClick={() => {props.onSmallPillowChange({pillowImage : props.smallPillow, pillowName : props.name}), props.onArticleChange(props.id)}}>
                <img className={styles.image} src={props.image} />
                <h2 className={styles.subtitle}>{props.name}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>

		: props.mediumPillow != null ?
		
			props.idActiveArticle == props.id ?

				<div className={`${styles.article} ${styles.articleActive}`} >
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onMediumPillowChange({pillowImage : props.mediumPillow, pillowName : props.name}), props.onArticleChange(props.id)}}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>
        
		: props.bigPillow != null ?
		
			props.idActiveArticle == props.id ?

				<div className={`${styles.article} ${styles.articleActive}`}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onBigPillowChange({pillowImage : props.bigPillow, pillowName : props.name}), props.onArticleChange(props.id)}}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

		 :  
		 
		 props.fittedSheet != null ?

			props.idActiveArticle == props.id ?
			 
				<div className={`${styles.article} ${styles.articleActive}`}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onFittedSheetChange({sheetImage : props.fittedSheet, sheetName : props.name}), props.onArticleChange(props.id)}}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>
         
		:  
		
			props.idActiveArticle == props.id ?

				<div className={`${styles.article} ${styles.articleActive}`}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onFlatSheetChange({sheetImage : props.flatSheet, sheetName : props.name}), props.onArticleChange(props.id)}}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

            
        } 
        </div>
    )
}

Article.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
    description: PropTypes.string,
    duvet: PropTypes.string,
    pillow: PropTypes.string,
};

export default Article