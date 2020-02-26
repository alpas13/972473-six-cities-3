import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const store = createStore(reducer);

const MinMaxRange = {
  MIN: 150,
  MAX: 350
};

const generateOffers = () => {
  return Math.floor(Math.random() * (MinMaxRange.MAX - MinMaxRange.MIN) + MinMaxRange.MIN);
};

ReactDom.render(
    <Provider store={store}>
      <App
        offersCount = {generateOffers()}
        offers = {offers}
        city = {`Amsterdam`}
      />
    </Provider>,
    document.querySelector(`#root`)
);
