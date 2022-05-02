import React from 'react';
import s from './styles.module.scss';
import Fade from 'react-reveal/Fade';
import PortItem from '../../PortItems';

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
                    name="Anti-Reality"
                    image="/images/Screenshot_20.png"
                    snipet="Solve your most complex tech problems & bring your ideas to life with the power of XR."
                    link="/portfolio/anti-reality"
                    />
                    <PortItem 
                    name="legacy lifestyle"
                    image="/images/legacy.png"
                    snipet="Experimental Apps, Campaigns & Games"
                    link="/portfolio/legacy-lifestyle"
                    />
                    <PortItem 
                    name="Teljoy"
                    image="/images/teljoy.png"
                    snipet="Ever wanted a TV? But want to but it on credit? Well at Teljoy you can!"
                    link="/portfolio/teljoy"
                    />
                    <PortItem 
                    name="Ball Shooter"
                    image="/images/ball-shooter/img-01.png"
                    snipet="Ball Shooter game built with plain HTML and JavaScript"
                    link="/portfolio/ball-shooter-game"
                    />
                </div>
            </Fade>
        </div>
    </section>
    )
}