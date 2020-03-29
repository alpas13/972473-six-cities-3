import {extend, offersModel} from "../../utils";

export const initialState = {
  offers: [],
  city: ``,
};

export const ActionType = {
  SET_CITY: `SET_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const Operation = {
  loadData: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
        .then((response) => {
          dispatch(ActionCreator.loadOffers(response.data));
          dispatch(ActionCreator.setCity(response.data));
        })
        .catch((err) => {
          throw err;
        });
  },
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offersModel(offers),
    };
  },
  setCity: (offers) => {
    return {
      type: ActionType.SET_CITY,
      payload: offersModel(offers)[0].city,
    };
  },
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.SET_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionCreator};
