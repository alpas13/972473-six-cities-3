import {createSelector} from "reselect";
import {SortType} from "../main/main.js";
import NameSpace from "../name-space";
import {uniqueFilter, updateOffers} from "../../utils";

const MAX_CITIES = 6;

const getOffersByCity = (state) => {
  const city = state[NameSpace.DATA].city;
  const offers = state[NameSpace.DATA].offers;

  return offers.slice().filter((offer) => offer.city === city);
};

const getSortType = (state) => {
  return state[NameSpace.MAIN].sortType;
};

const getOffersByPopular = (state) => {
    return getOffersByCity(state);
}

export const getOffers = createSelector(
  getOffersByCity,
  getSortType,
  (resultOne, resultTwo) => {
      switch (resultTwo) {
        case SortType.POPULAR:
          return resultOne;
        case SortType.TO_HIGH:
          return resultOne.slice().sort((a, b) => {
            return a.price - b.price;
          });
        case SortType.TO_LOW:
          return resultOne.slice().sort((a, b) => {
            return b.price - a.price;
          });
        case SortType.TOP_RATED:
          return resultOne.slice().sort((a, b) => {
            return b.rating.value - a.rating.value;
          });
      }
      return resultOne;
  }
);

export const getCity = (state) => {
  return state[NameSpace.DATA].city;
};

export const getCities = (state) => {
  const offers = state[NameSpace.DATA].offers;

  return uniqueFilter(offers, `city`, MAX_CITIES);
};
