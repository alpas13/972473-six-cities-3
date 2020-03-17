import {extend} from "../../utils.js";

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_PROPERTY: `GET_PROPERTY`,
  GET_NEAR_PLACES: `GET_NEAR_PLACES`,
  CHANGE_SORTING: `CHANGE_SORTING`,
};

export const SortType = {
  POPULAR: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

const initialState = {
  sortType: SortType.POPULAR,
  property: null,
  nearPlaces: null,
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
  getProperty: (offer) => {
    return {
      type: ActionType.GET_PROPERTY,
      payload: offer
    };
  },
  getNearPlaces: (offer, offers) => {
    const nearPlaceOffers = getNearPlaceOffers(offer, offers);
    return {
      type: ActionType.GET_NEAR_PLACES,
      payload: nearPlaceOffers,
    };
  },
  changeSorting: (sortValue) => {
    return {
      type: ActionType.CHANGE_SORTING,
      payload: sortValue,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        sortType: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
