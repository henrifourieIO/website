import React from 'react';
import s from './styles.module.scss';

export default function Skills() {

    return(
        <section className={s.root}>
            <div className={s.content}>
                <h2 className={s.chapter}>What I can do</h2>
                <h3 className={s.title}>The Services</h3>
                <p className={s.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </section>
    )
}