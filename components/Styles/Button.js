import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = props => {
    return <button className={styles.home}>{props.children}</button>
}

export default Button