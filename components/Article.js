import React from 'react'
import PropTypes from 'prop-types'

import styles from './Article.module.css'

const Article = props => {
    return(
        <div className={styles.article} onClick={() => props.onCouetteChange(props.couette)}>
            <img className={styles.image} src={props.image} />
            <h2 className={styles.subtitle}>{props.name}</h2>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

Article.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string
};

export default Article