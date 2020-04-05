import * as React from "react";
import {getSortType} from "../../const";

interface Props {
    isOpen: boolean;
    sortType: string;
    onSortingPopupToggle: () => void;
    onSortChange: (sort: string) => void;
}

const PlacesSorting: React.FC<Props> = (props: Props) => {
  const {sortType, isOpen, onSortingPopupToggle, onSortChange} = props;
  return (
    <form className="places__sorting" name="sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className={`places__sorting-type`} onClick={() => {
        onSortingPopupToggle();
      }} tabIndex={0}>
        {getSortType(sortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpen ? ` places__options--opened` : ``}`}
        onClick={(evt) => {
          const target = evt.target as HTMLElement;

          onSortChange(target.dataset.sort);
          onSortingPopupToggle();
        }}>
        <li className={`places__option${sortType === `popular` ? ` places__option--active` : ``}`}
          data-sort="popular" tabIndex={0}>Popular</li>
        <li className={`places__option${sortType === `to-high` ? ` places__option--active` : ``}`}
          data-sort="to-high" tabIndex={0}>Price: low to
          high
        </li>
        <li className={`places__option${sortType === `popular` ? ` to-low` : ``}`}
          data-sort="to-low" tabIndex={0}>Price: high to
          low
        </li>
        <li className={`places__option${sortType === `popular` ? ` top-rated` : ``}`}
          data-sort="top-rated" tabIndex={0}>Top rated first
        </li>
      </ul>
      <select className="places__sorting-type visually-hidden" id="places-sorting">
        <option className="places__option" value="popular" defaultValue="defaultValue">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
    </form>
  );
};

export default React.memo(PlacesSorting);
