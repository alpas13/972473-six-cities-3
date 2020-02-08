import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const MinMaxRange = {
  MIN: 150,
  MAX: 350
};

const titlesOffers = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const generateOffers = () => {
  return Math.floor(Math.random() * (MinMaxRange.MAX - MinMaxRange.MIN) + MinMaxRange.MIN);
};

ReactDom.render(
    <App
      offersCount = {generateOffers()}
      titlesOffers = {titlesOffers}
    />,
    document.querySelector(`#root`)
);
