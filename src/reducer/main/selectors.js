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

export const getFavoritesPageStatus = (state) => {
  return state[NameSpace.MAIN].favoritesPage;
};

export const getEmptyFavoritesPage = (state) => {
  return state[NameSpace.MAIN].emptyFavoritesPage;
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
    });

export const getPropertyPageStatus = (state) => {
  return state[NameSpace.MAIN].propertyPage;
};

export const getLoginPageStatus = (state) => {
  return state[NameSpace.USER].loginPage;
};

export const getCurrentPage = createSelector(
    getFavoritesPageStatus,
    getEmptyFavoritesPage,
    getPropertyPageStatus,
    getLoginPageStatus,
    (resultOne, resultTwo, resultThree, resultFour) => {
      if (resultOne) {
        return `favoritesPage`;
      } else if (resultTwo) {
        return `favoritesEmptyPage`;
      } else if (resultThree) {
        return `propertyPage`;
      } else if (resultFour) {
        return `loginPage`;
      } else {
        return `mainPage`;
      }
    }
);
