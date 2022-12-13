import React from "react";
import Insta from "../../assets/Insta";
import Telegram from "../../assets/Telegram";
import YouTube from "../../assets/YouTube";
import styles from "./SocialButton.module.scss";
import Boot from "../../assets/Booty.png";
import { URL_SOCIAL } from "../../constants";

const SocialButton = ({ title }) => {
  const currentIcon = {
    Instagram: <Insta />,
    Telegram: <Telegram />,
    YouTube: <YouTube />,
    Boosty: <img src={Boot} alt='Boosty' width={25} height={25} />,
  };
  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = URL_SOCIAL[title];
  };
  return (
    <div className={styles.currentButton} onClick={handleClick}>
      {currentIcon[title]}
      <p className={styles.title}>{title.toUpperCase()}</p>
    </div>
  );
};

export default SocialButton;
