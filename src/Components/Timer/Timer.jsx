import React, { useState } from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  const deadline = "December 26 2022 00:00:00 GMT+0300";
  // eslint-disable-next-line no-unused-vars
  const [currentTime, setCurrentTime] = useState("");

  const getTimeRemaining = (finish) => {
    const t = Date.parse(finish) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };
  const test = getTimeRemaining(deadline);
  const { days, hours, minutes, seconds } = test;

  const updateClock = () => {
    var t = getTimeRemaining(deadline);

    t.hours = ("0" + t.hours).slice(-2);
    t.minutes = ("333" + t.minutes).slice(-2);
    t.seconds = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  };
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
  setTimeout(() => {
    setCurrentTime(timeinterval);
  }, 1000);

  return (
    <div className={styles.main}>
      <p className={styles.title}>До повышения цены</p>
      <div className={styles.clock}>
        <div className={styles.numbers}>
          <p>{days}</p>
          <p className={styles.desc}>Дней</p>
        </div>
        <div className={styles.numbers}>
          <p>{hours}</p>
          <p className={styles.desc}>Часов</p>
        </div>
        <div className={styles.numbers}>
          <p>{minutes}</p>
          <p className={styles.desc}>Минут</p>
        </div>
        <div className={styles.numbers}>
          <p>{seconds}</p>
          <p className={styles.desc}>Секунд</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
