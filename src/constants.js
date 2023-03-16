import ArtLogo from "./assets/Art.png";
import PR from "./assets/Pr.png";
import Astro from "./assets/Astro.png";
import Soul from "./assets/soul.png";
import Karma from "./assets/karma.png";
import Love from "./assets/love.png";
import Child from "./assets/child.png";
import Arrow from "./assets/ArrowSmall.png";

export const URL_SOCIAL = {
  Instagram: "https://instagram.com/katerina.kexx?igshid=YmMyMTA2M2Y=",
  Telegram: "https://t.me/Chat_Kexx",
  YouTube: "https://youtube.com/@Katerina_kexx",
  Boosty: "https://boosty.to/katerina.kexx",
};

export const CAROUSEL = [
  {
    logo: ArtLogo,
    title: "Art · Events",
    firstDescript: "Cоздала такие проекты, как:",
    list: [" Завтрак с Кексом ", "Ночь с Кексом", "insta SHOW"],
    secondDescript:
      "Чтобы показать, как ярко может проявляться каждый человек, который идёт в своё предназначение. А так же, дать возможность вам реализовать свои таланты на моих творческих площадках.",
  },
  {
    logo: PR,
    title: "PR · Marketing",
    firstDescript:
      "Более 15 лет в сфере маркетинга, пиара и организации рекламных мероприятий.",
    secondDescript:
      "SMM С 2013 года являюсь креативным смм-специалистом, с количеством более 150 кейсов.",
  },
  {
    logo: Astro,
    title: "Astro · Psychology",
    firstDescript:
      "C 2021 года я практикующий астропсихолог. Провела более 100 консультаций и базово использую инструмент астропсихологии для работы в остальных сферах деятельности. ",
  },
];

export const PRODUCTS = [
  { logo: Soul, title: "Формула души", descript: Arrow, id: 1 },
  { logo: Karma, title: "Кармический путь души", descript: Arrow, id: 2 },
  { logo: Child, title: "Ох уж эти детки", descript: Arrow, id: 3 },
  { logo: Love, title: "Формула любви", descript: Arrow, id: 4 },
];

export const MODAL_PRODUCTS = {
  1: {
    logo: Soul,
    title: "Формула души",
    descript:
      "Это уникальная инструкция к себе, одна единственная на всю жизнь. Зная Формулу, можно узнать все Ваши сильные стороны, таланты и как их использовать. Какая сфера деятельности и роста именно у Вас, а также психологические причины внутренних тормозов, блоков",
    price: "6000 р.",
  },
  2: {
    logo: Karma,
    title: "Кармический путь души",
    descript:
      "Вектор развития Вашей души. Какие уроки нужно пройти в этой жизни, какие выполнить задачи. Вы сможете двигаться гармонично, получая от жизни удовольствие и радость идти своим путём, который выбрала ваша душа.",
    price: "6000 р.",
  },
  3: {
    logo: Child,
    title: "Ох уж эти детки",
    list: [
      "Разбор для детей до 12 лет",
      "Кармический Путь Души ребёнка, причина появления в роду определённого знака зодиака и задачи",
      "Лайфхаки для родителей",
      "Образы мамы и папы у ребёнка",
    ],
    price: "6000 р.",
  },
  4: {
    logo: Love,
    title: "Формула любви",
    descript:
      "Эдакий гороскоп совместимости, только по планетам. Индивидуальный разбор для Вас или Вашего настоящего/потенциального партнера.",
    price: "3500 р.",
  },
};
