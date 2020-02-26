import {extend} from "./utils";
import offers from "./mocks/offers";

const MAX_CITIES = 6;

const getCitiesList = (offersData, maxCities) => {
  const citiesSet = new Set();

  offersData.map((offer) => {
    if (citiesSet.size < maxCities) {
      citiesSet.add(offer.city);
    }
  });

  return citiesSet;
};

const initialState = {
  city: `Amsterdam`,
  offers,
  cities: getCitiesList(offers, MAX_CITIES),
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const getOffersByCity = (stateCity) => {
  return offers.slice().filter((offer) => offer.city === stateCity);
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (stateCity) => {
    const offersByCity = getOffersByCity(stateCity);
    return {
      type: ActionType.GET_OFFERS,
      payload: offersByCity,
    };
  }
};

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

export {reducer, ActionType, ActionCreator};
