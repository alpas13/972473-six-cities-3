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
};

export const getReviews = (state) => {
  return state[NameSpace.MAIN].reviews;
};

export const getFavoritesPageStatus = (state) => {
  return state[NameSpace.MAIN].favoritesPage;
};

export const getFavorites = (state) => {
  return state[NameSpace.MAIN].favorites;
};

export const getFavoritesId = (state) => {
  const favorites = state[NameSpace.MAIN].favorites;
  return favorites.slice().map((item) => item.id);
}

export const getPropertyPageStatus = (state) => {
  return state[NameSpace.MAIN].propertyPage;
};
