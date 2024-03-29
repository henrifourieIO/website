import React from "react";
import Head from "next/head";
import Background from "../../components/Background";
import s from "./portfolio.module.scss";

export default function legacy() {
  return (
    <>
      <Head>
        <title>Portfolio | Legacy Lifestyle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <main className={s.root}>
        <section>
          <div className={s.about}>
            <div>
              <h2 className={s.chapter}>It's a Lifestyle</h2>
              <h1 className={s.title}>Legacy Lifestyle</h1>
              <p className={s.body}>
                Join 1 million members who are already part of South Africa's
                fastest growing rewards programme
              </p>
            </div>
            <div style={{ width: "fit-content" }}>
              <a href="https://www.legacylifestyle.co.za/" target="_blank">
                <button className={s.button}>Visit Site</button>
              </a>
            </div>

            <div className={s.tech}>
              <span>Tech - </span>
              <div className={s.techIcons}>
                <i className="fab fa-react"></i>
                <img
                  src="/images/material.png"
                  alt="Material UI"
                  style={{ width: "20px" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={s.extra}>
            <div>
              <p>
                A large and ambitious project and rewards program, and damn
                ain't it a large project, a few years in the making I am luck to
                be part of this project creating some dashboard functions,
                connecting api's etc.
                <br />
              </p>
            </div>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "2em",
              }}
            >
              <img src="/images/legacy/img-01.png" style={{ width: "100%" }} />
            </div>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "2em",
              }}
            >
              <img src="/images/legacy/img-02.png" style={{ width: "100%" }} />
            </div>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "2em",
              }}
            >
              <img src="/images/legacy/img-03.png" style={{ width: "100%" }} />
            </div>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "2em",
              }}
            >
              <img src="/images/legacy/img-04.png" style={{ width: "100%" }} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
