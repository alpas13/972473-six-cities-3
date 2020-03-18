import {createSelector} from "reselect";
import NameSpace from "../name-space";

const MAX_CITIES = 6;

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
