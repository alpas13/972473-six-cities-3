import {extend} from "./utils";
import offers from "./mocks/offers";

const MAX_CITIES = 6;
const DEFAULT_CITY = 0;

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_PROPERTY: `GET_PROPERTY`,
  GET_NEAR_PLACES: `GET_NEAR_PLACES`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  ACTIVATE_PIN: `ACTIVATE_PIN`
};

const SortType = {
  POPULAR: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

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

const getNearPlaceOffers = (offer, offersData) => {
  const tempArray = [];
  offer.neighbourhoodOffers.map((offerItem) => {
    offersData.slice().filter((item) => offerItem === item.id).map((neighbourhood) => {
      tempArray.push(neighbourhood);
    });
  });

  return tempArray;
};

const changeOffersSorting = (sortValue, city) => {
  switch (sortValue) {
    case SortType.POPULAR:
      return getOffersByCity(city);
    case SortType.TO_HIGH:
      return getOffersByCity(city).sort((a, b) => {
        return a.price - b.price;
      });
    case SortType.TO_LOW:
      return getOffersByCity(city).sort((a, b) => {
        return b.price - a.price;
      });
    case SortType.TOP_RATED:
      return getOffersByCity(city).sort((a, b) => {
        return b.rating.value - a.rating.value;
      });
  }
  return getOffersByCity(city);
};

const citiesList = getCitiesList(offers, MAX_CITIES);

const initialOffers = getOffersByCity(citiesList[DEFAULT_CITY]);

const initialState = {
  offers: initialOffers,
  city: citiesList[DEFAULT_CITY],
  cities: citiesList,
  sortType: SortType.POPULAR,
  property: null,
  nearPlaces: null,
  activePin: null,
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
  changeSorting: (sortValue, city) => {
    const sortedOffers = changeOffersSorting(sortValue, city);
    return {
      type: ActionType.CHANGE_SORTING,
      payload: {
        sortedOffers,
        sortValue,
      },
    };
  },
  activatePin: (offerCoords) => {
    return {
      type: ActionType.ACTIVATE_PIN,
      payload: offerCoords,
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
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        offers: action.payload.sortedOffers,
        sortType: action.payload.sortValue,
      });
    case ActionType.ACTIVATE_PIN:
      return extend(state, {
        activePin: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
