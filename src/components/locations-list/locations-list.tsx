import * as React from "react";
import LocationsItem from "../locations-item/locations-item";

interface Props {
    cities: string[],
    activeItem: string;
    handleSelectItem: (city: string) => void;
    onChange: (city: string) => void;
}

const LocationsList: React.FC<Props> = (props) => {
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
};

export default React.memo(LocationsList);
