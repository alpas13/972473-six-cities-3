import {extend} from "./utils";
import offers from "./mocks/offers";

const MAX_CITIES = 6;
const DEFAULT_CITY = 0;

const getOffersByCity = (stateCity) => {
  return offers.slice().filter((offer) => offer.city === stateCity);
};

const getCitiesList = (offersData, maxCities) => {
  const citiesSet = new Set();

  offersData.map((offer) => {
    if (citiesSet.size < maxCities) {
      citiesSet.add(offer.city);
    }
  });

  return Array.from(citiesSet);
};

const citiesList = getCitiesList(offers, MAX_CITIES);

const initialOffers = getOffersByCity(citiesList[DEFAULT_CITY]);

const initialState = {
  offers: initialOffers,
  city: citiesList[DEFAULT_CITY],
  cities: citiesList,
  property: null,
  nearPlaces: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_PROPERTY: `GET_PROPERTY`,
  GET_NEAR_PLACES: `GET_NEAR_PLACES`,
};

const getNearPlaceOffers = (offer, offersData) => {
  const tempArray = [];
  offer.neighbourhoodOffers.map((offerItem) => {
    offersData.slice().filter((item) => offerItem === item.id).map((neighbourhood) => {
      tempArray.push(neighbourhood);
    });
  });

  return tempArray;
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
  },
  getProperty: (offer) => {
    return {
      type: ActionType.GET_PROPERTY,
      payload: offer
    };
  },
  getNearPlaces: (offer) => {
    const nearPlaceOffers = getNearPlaceOffers(offer, offers);
    return {
      type: ActionType.GET_NEAR_PLACES,
      payload: nearPlaceOffers,
    };
  },
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
    case ActionType.GET_PROPERTY:
      return extend(state, {
        property: action.payload,
      });
    case ActionType.GET_NEAR_PLACES:
      return extend(state, {
        nearPlaces: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
