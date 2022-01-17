import React from 'react';
import Link from 'next/link';
import s from './styles.module.scss';

export default function Nav() {

    return (
        <nav style={{zIndex: '9999', position: 'fixed', top: '20px', left: '3%', }}>
            <Link href="/" >
                <div className={s.imgWrapper}>
                    <img src="/images/HF.svg" className={s.img} />
                </div>
            </Link>
        </nav>
    )
}