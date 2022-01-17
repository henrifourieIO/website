import { Link,animateScroll as scroll, } from 'react-scroll'
import styles from "./styles.module.scss"
import CornerLeaves from '../CornerLeaves';
import Fade from 'react-reveal/Fade';

export default function Menu() {

      return (
        <>
          <CornerLeaves />
          <menu className={styles.Menu}>
              <div className={styles.lineOuter}></div>
              <Fade center delay={200}>
                <Link activeClass={styles.Active} className={styles.Item} to="test1" spy={true} smooth={true}  duration={300}>
                  <span>●</span>
                </Link>
              </Fade>
              <div className={styles.line}></div>
              <Fade center delay={300}>
                <Link activeClass={styles.Active} className={styles.Item} to="test2" spy={true} smooth={true} duration={300}>
                  <span>●</span>
                </Link>
              </Fade>
              <div className={styles.line}></div>
              <Fade center delay={400}>
                <Link activeClass={styles.Active} className={styles.Item} to="test3" spy={true} smooth={true} duration={300}>
                  <span>●</span>
                </Link>
              </Fade>
              <div className={styles.line}></div>
              <Fade center delay={500}>
                <Link activeClass={styles.Active} className={styles.Item} to="test4" spy={true} smooth={true} duration={300}>
                  <span>●</span>
                </Link>
              </Fade>
              <div className={styles.lineOuter}></div>
          </menu>
        </>
        
      )

}