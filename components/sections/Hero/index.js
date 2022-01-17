import React, { useState } from 'react';
import styles from './styles.module.scss';
import ShaftArrow from '../../ShaftArrow';
import Fade from 'react-reveal/Fade';

export default function Hero() {
    return(
        <section className={styles.hero}>
                <div className={styles.content}>
                    <h1>
                        <Fade top cascade delay={700}>
                            <div className={styles.i1}>Hi I am</div>
                            <div className={styles.i2}>Henri Fourie</div>
                            <div className={styles.i3}>Front-End Developer</div>
                            <div className={styles.i4}>based in South Africa</div>
                        </Fade>
                    </h1>
                    <p style={{wordBreak: 'break-word'}}>
                        <Fade left delay={700}>
                        I'm a multi-talented human with over 4+ years of experiences in wide range of development and design disciplines.
                        </Fade>
                    </p>
                </div>
            <div className={styles.overlay} />
            <div className={styles.heroImage}>
                <Fade delay={1000}><img src="/images/me-2.png" /></Fade>
            </div>
            <ShaftArrow />
        </section>
    )
}