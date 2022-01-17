import React from "react";
import s from "./styles.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <section className={s.root}>
      <div className={s.content}>
        <Fade right cascade delay={200}>
          <h2 className={s.chapter}>About Me</h2>
          <h3 className={s.title}>Who I am</h3>
          <p className={s.body}>
            I am passionate about what I do, enjoy every bit of it and love to
            learn.
          </p>
        </Fade>
        <Fade delay={300}>
          <Tabs>
            <TabList>
              <Tab>About</Tab>
              <Tab>Skills</Tab>
              <Tab>Experience</Tab>
            </TabList>

            <TabPanel>
              <p>
                I am a frontend developer, Specializing in mostly React JS and Wordpress (You know we had to at some point). 
                <br/>
                <br/>
                Dabble in the 3D arts like three js and also others enjoy making great visuals 
                with JavaScript and user interfaces. Very outgoing person who also likes
                to experiment with different things and get good at it. Fluent
                communication is the best way to improve efficiency and
                productivity on almost everything, team or client-related. I have
                worked with clients across the world, UK, India, Kenya to name a
                few from different companies of large multi-million corporations
                to small community shops and companies.
              </p>
            </TabPanel>
            <TabPanel>
              <table className={s.table} cellSpacing={0} cellPadding={0}>
                <thead>
                  <td>Skill</td>
                  <td>Level</td>
                  <td>Experience</td>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML</td>
                    <td>9/10</td>
                    <td>4 Years</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>8/10</td>
                    <td>4 Years</td>
                  </tr>
                  <tr>
                    <td>JS</td>
                    <td>7/10</td>
                    <td>4 Years</td>
                  </tr>
                  <tr>
                    <td>ReactJS</td>
                    <td>7/10</td>
                    <td>2 Years</td>
                  </tr>
                  <tr>
                    <td>Redux</td>
                    <td>5/10</td>
                    <td>1 Year</td>
                  </tr>
                  <tr>
                    <td>VueJS</td>
                    <td>4/10</td>
                    <td>1 Year</td>
                  </tr>
                  <tr>
                    <td>Graph QL</td>
                    <td>6/10</td>
                    <td>1 Year</td>
                  </tr>
                  <tr>
                    <td>Material UI</td>
                    <td>8/10</td>
                    <td>1 Year</td>
                  </tr>
                  <tr>
                    <td>AWS</td>
                    <td>5/10</td>
                    <td>Recent</td>
                  </tr>
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <div className={s.experience}>
                <div className={s.item}>
                  <h5>Frontend Developer</h5>
                  <p>FuseBox Online</p>
                  <p>Jul 2021 - present</p>
                </div>
                <div className={s.item}>
                  <h5>Lead Web Development and Design</h5>
                  <p>Hamba Digital</p>
                  <p>Jan 2020 - Jul 2021 - 1yr 7mos</p>
                </div>
                <div className={s.item}>
                  <h5>Graphic Designer, Animation, UI/UX</h5>
                  <p>1 Point 3 Creative Ltd</p>
                  <p>Jul 2017 - Jan 2020 - 2yrs 7mos</p>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </Fade>
      </div>
    </section>
  );
}
