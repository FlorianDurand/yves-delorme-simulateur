import React, { useState } from 'react';
import PropTypes from 'prop-types'

import styles from './Article.module.css'

const Article = props => {
    let couette = props.couette;
    const [activeCouette,setActiveCouette] = useState(false);
    return(
        <div>
        { couette != null ? 

            props.idActiveArticle == props.id ?
                // Recupère les différentes informations de l element et les passent à la fonction onCouetteChange
                <div className={`${styles.article} ${styles.articleActive}`}  >
                    <img className={styles.image} src={props.image} />
                    <h2 className={styles.subtitle}>{props.name}</h2>
                    <p className={styles.description}>{props.description}</p>
                </div>

            :

                <div className={`${styles.article}`}  onClick={() => {props.onCouetteChange({couetteImage : props.couette,  couetteName : props.name}), setActiveCouette(true), props.onArticleChange(props.id)}}>
                    <img className={styles.image} src={props.image} />
                    <h2 className={styles.subtitle}>{props.name}</h2>
                    <p className={styles.description}>{props.description}</p>
                </div>

		: props.taiesPetit != null ?
		
			props.idActiveArticle == props.id ?

            <div className={`${styles.article} ${styles.articleActive}`}  >
                <img className={styles.image} src={props.image} />
                <h2 className={styles.subtitle}>{props.name}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>

			:

			<div className={styles.article} onClick={() => {props.onSmallPillowChange({pillowImage : props.taiesPetit, pillowName : props.name}), props.onArticleChange(props.id)}}>
                <img className={styles.image} src={props.image} />
                <h2 className={styles.subtitle}>{props.name}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>

		: props.taiesMoyen != null ?
		
			props.idActiveArticle == props.id ?

				<div className={`${styles.article} ${styles.articleActive}`} >
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onMediumPillowChange({pillowImage : props.taiesMoyen, pillowName : props.name}), props.onArticleChange(props.id)}}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>
        
		: props.taiesGrand != null ?
		
			props.idActiveArticle == props.id ?

				<div className={`${styles.article} ${styles.articleActive}`}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onLargePillowChange({pillowImage : props.taiesGrand, pillowName : props.name}), props.onArticleChange(props.id)}}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

		 :  
		 
		 props.drapHousse != null ?

			props.idActiveArticle == props.id ?
			 
				<div className={`${styles.article} ${styles.articleActive}`}>
					<img className={styles.image} src={props.image} />
					<h2 className={styles.subtitle}>{props.name}</h2>
					<p className={styles.description}>{props.description}</p>
				</div>

			:

				<div className={styles.article} onClick={() => {props.onDrapHousseChange({drapImage : props.drapHousse, drapName : props.name}), props.onArticleChange(props.id)}}>
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

				<div className={styles.article} onClick={() => {props.onDrapChange({drapImage : props.drapPlat, drapName : props.name}), props.onArticleChange(props.id)}}>
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
    couette: PropTypes.string,
    taies: PropTypes.string,
};

export default Article