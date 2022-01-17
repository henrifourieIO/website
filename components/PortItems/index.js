import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './styles.module.scss';

export default function PortItem({name, image, snipet, link}) {

    return(
        <div className={s.item}>
            <Image className={s.image} src={`${image}`} width={1920} height={1080} />
            <div className={s.content}>
                <h4 className={s.title}>{name}</h4>
                <p className={s.snipet}>{snipet}</p>
                <Link href={link}>
                    <a className={s.link}>Details <i className="fas fa-chevron-right"></i></a>
                </Link>
            </div>
            
        </div>
    )
}