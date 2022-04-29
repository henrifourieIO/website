import React from 'react'
import styles from './styles.module.scss'

export default function Preloader() {
    return(
        <div className={styles.preloader}>
            <div className={styles.preloaderAnimation}>
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}