import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);

    this._SortType = {
      POPULAR: `Popular`,
      TO_HIGH: `Price: low to high`,
      TO_LOW: `Price: high to low`,
      TOP_RATED: `Top rated first`,
    };
  }

  _getSortType(sortValue) {
    switch (sortValue) {
      case `popular`:
        return this._SortType.POPULAR;
      case `to-high`:
        return this._SortType.TO_HIGH;
      case `to-low`:
        return this._SortType.TO_LOW;
      case `top-rated`:
        return this._SortType.TOP_RATED;
    }
    return this._SortType.POPULAR;
  }

  _changeSelectValue(sort) {
    const selectValue = document.querySelector(`#places-sorting`);
    selectValue.value = sort;
  }

  _changeActiveListElement(evt) {
    document.querySelector(`.places__option--active`).classList.remove(`places__option--active`);
    evt.target.classList.add(`places__option--active`);
  }

  render() {
    const {city, sortType, onSortingChange} = this.props;
    return (
      <form className="places__sorting" name="sorting" onClick={(evt) => {
        const selectValue = document.querySelector(`#places-sorting`);
        if (evt.target.tagName === `LI` && sortType !== selectValue.value) {
          onSortingChange(selectValue.value, city);
        }
      }} action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" onClick={(evt) => {
          const list = document.querySelector(`ul.places__options`);
          if ((evt.target.tagName === `SPAN` || evt.target.tagName === `svg` || evt.target.tagName === `use`)
              && !list.classList.contains(`places__options--opened`)) {
            document.querySelector(`ul.places__options`).classList.add(`places__options--opened`);
          }
        }} tabIndex="0">
          {this._getSortType(sortType)}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom" onClick={(evt) => {
          if (evt.target.tagName === `LI` && !evt.target.classList.contains(`places__option--active`)) {
            this._changeActiveListElement(evt);
            this._changeSelectValue(evt.target.dataset.sort);
          }
          evt.currentTarget.classList.remove(`places__options--opened`);
        }}>
          <li className="places__option places__option--active" data-sort="popular" tabIndex="0">Popular</li>
          <li className="places__option" data-sort="to-high" tabIndex="0">Price: low to
            high
          </li>
          <li className="places__option" data-sort="to-low" tabIndex="0">Price: high to
            low
          </li>
          <li className="places__option" data-sort="top-rated" tabIndex="0">Top rated first
          </li>
        </ul>
        <select className="places__sorting-type visually-hidden" id="places-sorting">
          <option className="places__option" value="popular" defaultValue>Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  city: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

export default PlacesSorting;
