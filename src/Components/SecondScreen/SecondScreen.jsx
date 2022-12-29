import React from "react";
import Premiere from "../../assets/Premiere.png";
import PremiereFoto from "../../assets/PremiereFoto.png";
import Arrow from "../../assets/Arrow.png";
import styles from "./SecondScreen.module.scss";

const SecondScreen = () => {
  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href =
      "https://boosty.to/katerina.kexx/posts/b8ce1254-e863-4144-80da-8232b39cd059?share=post_link";
  };
  return (
    <div className={styles.mainSecond}>
      <img src={Premiere} alt='Премьера' width={200} />
      <div className={styles.titleBlock}>
        <h2 className={styles.titleName}>ВОЛШЕБНАЯ МЕДИТАЦИЯ</h2>
        <p className={styles.titleDescript}>Авторский продукт</p>
      </div>
      <div className={styles.descriptBlock}>
        <img
          src={PremiereFoto}
          alt='kexx'
          width={180}
          height={180}
          className={styles.img}
        />
        <div className={styles.descript}>
          <p className={styles.desc}>
            Это волшебная медитация на ресурс и предназначение.
          </p>
          <p className={styles.desc}>
            Вы совершите путешествие в самый удивительный из миров, который
            находится внутри вас. Обещаю, после этого путешествия ваша жизнь
            больше не будет прежней и вы вернётесь с тем самым сокровищем, за
            которым пришли сюда.
          </p>
        </div>
      </div>
      <div className={styles.customButton} onClick={handleClick}>
        <p>КУПИТЬ</p>
        <img src={Arrow} alt='Arrow'></img>
        <p>888 р.</p>
      </div>
    </div>
  );
};

export default SecondScreen;
