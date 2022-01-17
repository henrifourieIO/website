import React, { useState } from 'react';
import s from './styles.module.scss';
import CornerLeaves from '../../CornerLeaves';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import animationData from './Animation/send-email.json';
import Fade from 'react-reveal/Fade';


export default function Contact() {
    const [sent, setSent] = useState(false);

    function Animation() {
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
        };
    
        return (
            <div>
                <Lottie 
                    options={defaultOptions}
                    height={32}
                    width={32}
                    isStopped={!sent}
                />
            </div>
        )
    }

    function sendEmail(e) {
        e.preventDefault();
        setSent(true);

        emailjs.sendForm('service_7zqx16k', 'template_puhedj9', e.target, 'user_KercxwWPwPKV53JpOtz81')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              setSent(false);
          });
      }
    

    return(
        <section className={s.root}>
            <div className={s.content}>
                <Fade right cascade delay={200}>
                    <h2 className={s.chapter}>Let's have a chat</h2>
                    <h3 className={s.title}>Contact Me</h3>
                    <p className={s.body}>
                        Thanks for taking the time to reach out. 
                        <br/>
                        How can I help you today?
                    </p>
                </Fade>
                <Fade bottom delay={300}>
                    <form className={s.form} onSubmit={sendEmail} >
                        <div className={s.area}>
                            <div className={s.name}>
                                <label htmlFor="name"></label>
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className={s.number}>
                                <label htmlFor="number"></label>
                                <input type="number" name="number" id="number" placeholder="Number" />
                            </div>
                        </div>
                        <div className={s.email}>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="Email Address" />
                        </div>
                        <div className={s.message}>
                            <label htmlFor="message"></label>
                            <textarea id="message" name="message" placeholder="Message" />
                        </div>
                        <div  className={s.bottomArea}>
                            <button  className={s.button}>Send
                                <span style={{display: sent ? 'inline-block' : 'none'}}>
                                    <Animation />
                                </span>
                            </button>
                            <div className={s.contact}>
                            <a href="tel:+27817334909"><i className="fab fa-whatsapp-square" /> +27 81 733 4909</a>
                            </div>
                        </div>
                    </form>
                </Fade>
            </div>
        </section>
    )
}