import React from "react";
import PropTypes from "prop-types";
import LocationsItem from "../locations-item/locations-item.jsx";

const LocationsList = React.memo(function LocationsList(props) {
  const {cities, activeItem, onChange} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((cityItem) => (
        <LocationsItem
          key={cityItem}
          cityItem={cityItem}
          activeItem={activeItem}
          onChange={onChange}
        />
      ))}
    </ul>
  );
});

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
  activeItem: PropTypes.string,
  handleSelectItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LocationsList;
