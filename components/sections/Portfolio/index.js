import React from 'react';
import s from './styles.module.scss';
import Fade from 'react-reveal/Fade';

import PortItem from './portItems';

export default function Portfolio() {

    return(
        <section className={s.root}>
        <div className={s.content}>
            <Fade right cascade delay={200}>
                <h2 className={s.chapter}>Some of my work</h2>
                <h3 className={s.title}>Portfolio</h3>
            </Fade>
            <Fade bottom delay={300}>  
                <div className={s.portItems}>
                    <PortItem 
                    name="Alto 234"
                    image="/images/alto-234.png"
                    snipet="The highest, urban bar in Africa. Found on the rooftop of The Leonardo in Sandton."
                    link="/portfolio/alto234"
                    />
                    <PortItem 
                    name="legacy lifestyle"
                    image="/images/antireality-thumb.png"
                    snipet="Experimental Apps, Campaigns & Games"
                    link="/portfolio/legacy-lifestyle"
                    />
                    <PortItem 
                    name="Teljoy"
                    image="/images/teljoy.png"
                    snipet="Ever wanted a TV? But want to but it on credit? Well at Teljoy you can!"
                    link="/portfolio/teljoy"
                    />
                </div>
            </Fade>
        </div>
    </section>
    )
}