import {extend, offerModel, reviewModel} from "../../utils.js";

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  GET_PROPERTY: `GET_PROPERTY`,
  LOAD_NEAR_PLACES: `LOAD_NEAR_PLACES`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  FAVORITES_PAGE: `FAVORITES_PAGE`,
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
  nearPlaces: [],
  reviews: [],
  favorites: [],
  favoritesPage: false,
};

export const Operation = {
  loadNearPlaceOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
        .then((response) => {
          dispatch(ActionCreator.loadNearPlaceOffers(response.data));
        })
        .catch((err) => {
          throw err;
        });
  },
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
        .then((response) => {
          dispatch(ActionCreator.loadReviews(response.data));
        })
        .catch((err) => {
          throw err;
        });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
        .then((response) => {
          dispatch(ActionCreator.loadFavorites(response.data));
        })
        .catch((err) => {
          throw err;
        });
  },
};

const ActionCreator = {
  getProperty: (offer) => {
    return {
      type: ActionType.GET_PROPERTY,
      payload: offer
    };
  },
  loadNearPlaceOffers: (offers) => {
    return {
      type: ActionType.LOAD_NEAR_PLACES,
      payload: offerModel(offers),
    };
  },
  changeSorting: (sortValue) => {
    return {
      type: ActionType.CHANGE_SORTING,
      payload: sortValue,
    };
  },
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewModel(reviews),
    };
  },
  loadFavorites: (favorites) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: offerModel(favorites),
    };
  },
  favoritesPage: () => {
    return {
      type: ActionType.FAVORITES_PAGE,
      payload: true,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_PROPERTY:
      return extend(state, {
        property: action.payload,
      });
    case ActionType.LOAD_NEAR_PLACES:
      return extend(state, {
        nearPlaces: action.payload,
      });
    case ActionType.CHANGE_SORTING:
      return extend(state, {
        sortType: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
    case ActionType.FAVORITES_PAGE:
      return extend(state, {
        favoritesPage: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
