import { useState, useEffect } from "react";
import '../styles/globals.scss'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Preloader from "../components/Preloader";

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [loading, seLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      seLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-167450114-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-167450114-1');
        `,
          }}
        ></script>
      </Head>
      {loading ? <Preloader /> : null}
        <>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </>
    </>
  )
}

export default MyApp
