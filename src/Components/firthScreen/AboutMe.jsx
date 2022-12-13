import React from "react";
import styles from "./AboutMe.module.scss";
import Logo from "../../assets/KaterinaKexx.png";
import { CAROUSEL } from "../../constants";
import Frame from "../../assets/frame.png";

const AboutMe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>КТО ТАКАЯ</h2>
        <img src={Logo} alt='KKATERINA KEXX' className={styles.imgLogo} />
      </div>
      <div className={styles.carousel}>
        {CAROUSEL.map(
          ({ logo, title, firstDescript, secondDescript, list }, index) => (
            <div key={index} className={styles.aboutBlock}>
              <div className={styles.aboutBlockInside}>
                <img src={logo} alt='' className={styles.imgAbout} />
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.descript}>{firstDescript}</p>
                {list && (
                  <ul className={styles.descript}>
                    {list.map((elem, index) => (
                      <li key={index}>{elem}</li>
                    ))}
                  </ul>
                )}
                <p className={styles.descript}>{secondDescript}</p>
              </div>
            </div>
          )
        )}
      </div>
      <img className={styles.frame} src={Frame} alt='' />
    </div>
  );
};

export default AboutMe;
