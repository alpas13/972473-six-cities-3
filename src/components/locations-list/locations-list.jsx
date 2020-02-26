import React from "react";
import PropTypes from "prop-types";

const LocationsList = (props) => {
  const {cities, onCityClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a className="locations__item-link tabs__item" onClick={
            onCityClick(city)
          } href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default LocationsList;
