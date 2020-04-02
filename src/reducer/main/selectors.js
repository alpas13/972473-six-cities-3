import {createSelector} from "reselect";
import NameSpace from "../name-space";

export const getSortType = (state) => {
  return state[NameSpace.MAIN].sortType;
};

export const getPropertyId = (state) => {
  const offerId = state[NameSpace.MAIN].propertyId;

  return Number(offerId);
};

export const getNearPlaceOffers = (state) => {
  return state[NameSpace.MAIN].nearPlaces;
};

export const getReviews = (state) => {
  return state[NameSpace.MAIN].reviews;
};

export const getFavorites = (state) => {
  return state[NameSpace.MAIN].favorites;
};

export const getFavoritesId = createSelector(
    getFavorites,
    (resultOne) => {
      return resultOne.slice().map((item) => item.id);
    }
);

export const getFavoritesStatus = createSelector(
    getFavorites,
    (resultOne) => {
      return resultOne.length > 0;
    }
);
