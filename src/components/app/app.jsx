import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersCount, titlesOffers} = props;

  return (
    <Main
      offersCount = {offersCount}
      titlesOffers = {titlesOffers}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  titlesOffers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
