import * as React from "react";

interface Props {
  onChange: (cityItem: string) => void;
  cityItem: string;
  activeItem: string;
}

const LocationsItem: React.FC<Props> = (props: Props) => {
  const {cityItem, activeItem, onChange} = props;
  return (
    <li className="locations__item" onClick={(evt) => {
      const target = evt.target as HTMLElement;

      if ((activeItem !== cityItem) && target.tagName === `SPAN`) {
        onChange(cityItem);
      }
    }}>
      <a className={`locations__item-link tabs__item${(activeItem === cityItem) ? ` tabs__item--active` : ``}`} href="#">
        <span>{cityItem}</span>
      </a>
    </li>
  );
};

export default React.memo(LocationsItem);
