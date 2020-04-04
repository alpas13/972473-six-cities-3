import React from "react";
import PropTypes from "prop-types";

const LocationsItem = React.memo(function LocationsItem(props) {
  const {cityItem, activeItem, onChange} = props;
  return (
    <li className="locations__item" onClick={(evt) => {
      if ((activeItem !== cityItem) && evt.target.tagName === `SPAN`) {
        onChange(cityItem);
      }
    }}>
      <a className={`locations__item-link tabs__item${(activeItem === cityItem) ? ` tabs__item--active` : ``}`} href="#">
        <span>{cityItem}</span>
      </a>
    </li>
  );
});

LocationsItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  cityItem: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
};

export default LocationsItem;
