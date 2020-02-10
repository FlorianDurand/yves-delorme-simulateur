import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = props => {

    

    if ( props.classCustom === 'settings' ) {
        return <button className={styles.buttonSettings}>{props.children}</button>
    } else {
        return <button className={styles.home}>{props.children}</button>
    }
}

export default Button