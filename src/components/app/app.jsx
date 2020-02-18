import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleOfferHandler = () => {};

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <Main
      offersCount = {offersCount}
      offers = {offers}
      onTitleOfferClick = {titleOfferHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
