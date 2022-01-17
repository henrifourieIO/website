import Head from 'next/head';
import { Element, animateScroll as scroll } from 'react-scroll';
import styles from '../styles/Home.module.scss';
import Menu from '../components/Menu'

//Sections
import Hero from '../components/sections/Hero';
import Contact from '../components/sections/Contact';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Background from '../components/Background';

export default function Home() {
  return (
    <>
      <Head>
        <title>Henri Fourie | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico"  />
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-167450114-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-167450114-1');
</script>

      </Head>
      <Menu />
      <main className={styles.main}>
        <Background />
        <Element name="test1" className={styles.Element}>
          <Hero />
        </Element>
        <Element name="test2" className={styles.Element}>
          <About />
        </Element>
        <Element name="test3" className={styles.Element}>
          <Portfolio />
        </Element>
        <Element name="test4" className={styles.Element}>
          <Contact />
        </Element>
      </main>
    </>
  )
}
