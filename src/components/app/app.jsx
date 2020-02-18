import React from "react";
import Main from "../main/main.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import PropTypes from "prop-types";

const titleOfferHandler = () => {};

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <Main offersCount = {offersCount}>
      <OffersList
        offers={offers}
        onTitleOfferClick={titleOfferHandler}
      />
    </Main>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
