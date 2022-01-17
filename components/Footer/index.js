import React from 'react';
import Link from 'next/link';
import s from './styles.module.scss';

export default function Footer() {

    return(
        <footer className={s.footer}>
            <div><img src="/images/HF.svg" /></div>
            <div>
                <div className={s.techIcons}>
                    <a href="https://api.whatsapp.com/send/?phone=27817334909&text=Hi+Henri,+contacting+you+from+your+website,+can+you+assist+me?&app_absent=0" target="_blank">
                        <i className="fab fa-whatsapp-square"></i></a>
                    <a href="https://www.linkedin.com/in/henri-fourie-27a743148/" target="_blank">
                        <i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/henri.fourie/" target="_blank">
                        <i className="fab fa-instagram"></i></a>
                    <a href="mailto:hello@henrifourie.io">
                        <i className="fas fa-envelope-square"></i></a>
                </div>
            </div>
        </footer>
    )
}