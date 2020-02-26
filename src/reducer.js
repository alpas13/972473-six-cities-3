import {extend} from "./utils";
import offers from "./mocks/offers";

const initialState = {
  city: `Amsterdam`,
  offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

/* const CreateAction = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (filteredOffers) => ({
    type: ActionType.GET_OFFERS,
    payload: filteredOffers
  })
};*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType};
