import {createSelector} from "reselect";
import NameSpace from "../name-space";

export const getSortType = (state) => {
  return state[NameSpace.MAIN].sortType;
};

export const getProperty = (state) => {
  return state[NameSpace.MAIN].property;
};

export const getNearPlaceOffers = (state) => {
  const offers = state[NameSpace.MAIN].nearPlaces;
  const favorites = state[NameSpace.MAIN].favorites;

   offers.map((offer) => offer.bookmark = false);

     if (!favorites.length) {
         return offers;
       }

       favorites.slice().map((offer) => {
           offers.map((item) => {
             if (item.id === offer.id) {
               item.bookmark = true;
              }
           });
         });

    return offers;
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

export const getPropertyPageStatus = (state) => {
  return state[NameSpace.MAIN].propertyPage;
};
