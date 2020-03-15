import React, { useState } from 'react';
import PropTypes from 'prop-types'

import styles from './Article.module.css'

const Article = props => {
    let couette = props.couette;
    const [activeCouette,setActiveCouette] = useState(false);
    return(
        <div>
        { couette != null ? 

            activeCouette ?

                <div className={`${styles.article} ${styles.articleActive}`}  onClick={() => {props.onCouetteChange(props.couette), setActiveCouette(true)}}>
                    <img className={styles.image} src={props.image} />
                    <h2 className={styles.subtitle}>{props.name}</h2>
                    <p className={styles.description}>{props.description}</p>
                </div>

            :

                <div className={`${styles.article}`}  onClick={() => {props.onCouetteChange(props.couette), setActiveCouette(true)}}>
                    <img className={styles.image} src={props.image} />
                    <h2 className={styles.subtitle}>{props.name}</h2>
                    <p className={styles.description}>{props.description}</p>
                </div>

        : props.taiesPetit != null ?

            <div className={styles.article} onClick={() => props.onSmallPillowChange(props.taiesPetit)}>
                <img className={styles.image} src={props.image} />
                <h2 className={styles.subtitle}>{props.name}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>

        : props.taiesMoyen != null ?

        <div className={styles.article} onClick={() => props.onMediumPillowChange(props.taiesMoyen)}>
            <img className={styles.image} src={props.image} />
            <h2 className={styles.subtitle}>{props.name}</h2>
            <p className={styles.description}>{props.description}</p>
        </div>
        
        : 

        <div className={styles.article} onClick={() => props.onLargePillowChange(props.taiesGrand)}>
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
    taies: PropTypes.string
};

export default Article