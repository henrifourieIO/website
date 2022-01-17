import React from 'react';
import s from './styles.module.scss';
import { Fade } from 'react-reveal';

export default function Background() {

    return(
        <div className={s.background}>
            <Fade><div className={s.overlay} /></Fade>
        </div>
    )
}