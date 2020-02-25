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

const CreateAction = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (cityState) => ({
    type: ActionType.GET_OFFERS,
    payload: cityState
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_OFFERS:
      if (state.offers[0].city === action.payload) {
        return state;
      }
      return extend(state, {
        offers: offers.slice().filter((offer) => offer.city === action.payload),
      });
  }
  return state;
};
