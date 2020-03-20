import {createSelector} from "reselect";
import NameSpace from "../name-space";

export const getSortType = (state) => {
  return state[NameSpace.MAIN].sortType;
};

export const getProperty = (state) => {
  return state[NameSpace.MAIN].property;
};

export const getNearPlaceOffers = (state) => {
  return state[NameSpace.MAIN].nearPlaces;
}

export const getReviews = (state) => {
  return state[NameSpace.MAIN].reviews;
}

export const getFavoritesStatus = (state) => {
  return state[NameSpace.MAIN].favoritesStatus;
}

export const getFavorites = (state) => {
  return state[NameSpace.MAIN].favorites;
}
