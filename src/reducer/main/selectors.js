import {createSelector} from "reselect";
import NameSpace from "../name-space";

const MAX_CITIES = 6;

export const getSortType = (state) => {
  return state[NameSpace.MAIN].sortType;
};
