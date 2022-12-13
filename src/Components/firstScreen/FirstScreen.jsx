import React from "react";
import SocialButton from "../buttons/SocialButton";
import styles from "./firstScreen.module.scss";

const FirstScreen = () => {
  return (
    <div className={styles.mainScreen}>
      <h1 className={styles.titleName}>KATERINA KEXX</h1>
      <p className={styles.description}>
        PR · marketing · art · psychology · meditation
      </p>
      <div className={styles.buttonBlock}>
        <SocialButton title='Instagram' />
        <SocialButton title='Telegram' />
        <SocialButton title='YouTube' />
        <SocialButton title='Boosty' />
      </div>
    </div>
  );
};

export default FirstScreen;
