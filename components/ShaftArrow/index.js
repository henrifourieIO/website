import React from 'react';
import s from './styles.module.scss';

export default function ShaftArrow({ height }) {
    return <div className={s.arrow} style={{height: height ? height : '25%'}}> 
        <span className={s.shaft} />
        <div className={s.point} /> 
    </div>
}