import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const MinMaxRange = {
  MIN: 150,
  MAX: 350
};

const generateOffers = () => {
  return Math.floor(Math.random() * (MinMaxRange.MAX - MinMaxRange.MIN) + MinMaxRange.MIN);
};

ReactDom.render(
    <App
      offersCount = {generateOffers()}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
