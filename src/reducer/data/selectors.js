import {createSelector} from "reselect";
import {SortType} from "../main/main.js";
import NameSpace from "../name-space";
import {uniqueFilter} from "../../utils";

const MAX_CITIES = 6;

const getAllOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCity = (state) => {
  return state[NameSpace.DATA].city;
};


const getOfferId = (state) => {
  return state[NameSpace.MAIN].propertyId;
};

const getSortType = (state) => {
  return state[NameSpace.MAIN].sortType;
};

const getOffersByCity = createSelector(
    getAllOffers,
    getCity,
    (resultOne, resultTwo) => {
      return resultOne.slice().filter((offer) => offer.city === resultTwo);
    }
);

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

export const getOfferById = createSelector(
    getAllOffers,
    getOfferId,
    (resultOne, resultTwo) => {
      if (resultTwo) {
        return resultOne.slice().filter((offer) => offer.id === resultTwo)[0];
      }
      return resultOne[0];
    }
);

export const getCities = (state) => {
  const offers = state[NameSpace.DATA].offers;

  return uniqueFilter(offers, `city`, MAX_CITIES);
};
