import React from "react";
import PropTypes from "prop-types";

const LocationsList = (props) => {
  const {cities, city, onCityClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((cityValue) => (
        <li key={cityValue} className="locations__item">
          <a className="locations__item-link tabs__item" onClick={() => {
            if (city !== cityValue) {
              onCityClick(cityValue);
            }
          }} href="#">
            <span>{cityValue}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default LocationsList;
