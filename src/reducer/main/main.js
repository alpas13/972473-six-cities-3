import {extend, offersModel, reviewModel} from "../../utils.js";

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_PROPERTY_ID: `SET_PROPERTY_ID`,
  UPDATE_PROPERTY: `UPDATE_PROPERTY`,
  LOAD_NEAR_PLACES: `LOAD_NEAR_PLACES`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  FAVORITES_PAGE: `FAVORITES_PAGE`,
  EMPTY_FAVORITES_PAGE: `EMPTY_FAVORITES_PAGE`,
  PROPERTY_PAGE: `PROPERTY_PAGE`,
};

export const SortType = {
  POPULAR: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const initialState = {
  sortType: SortType.POPULAR,
  propertyId: null,
  nearPlaces: [],
  reviews: [],
  favorites: [],
  favoritesPage: false,
  emptyFavoritesPage: false,
  propertyPage: false,
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
  sendReview: (offerId, review, clearForm) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, {
      comment: review.comment,
      rating: review.rating,
    })
        .then((response) => {
          dispatch(ActionCreator.loadReviews(response.data));
          clearForm();
        })
        .catch((err) => {
          clearForm(false);
          throw err;
        });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
        .then((response) => {
          dispatch(ActionCreator.loadFavorites(response.data));
        })
        .catch((err) => {
          dispatch(ActionCreator.loadFavorites(false));
          throw err;
        });
  },
  toggleFavoriteItem: (offerId, currentStatus) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${currentStatus ? 0 : 1}`)
        .then(() => {
          dispatch(Operation.loadFavorites());
        })
        .catch((err) => {
          throw err;
        });
  },
};

const ActionCreator = {
  setPropertyId: (offerId) => {
    return {
      type: ActionType.SET_PROPERTY_ID,
      payload: offerId,
    };
  },
  loadNearPlaceOffers: (offers) => {
    return {
      type: ActionType.LOAD_NEAR_PLACES,
      payload: offersModel(offers),
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
      payload: offersModel(favorites),
    };
  },
  favoritesPage: (status) => {
    if (status) {
      return {
        type: ActionType.FAVORITES_PAGE,
        payload: true,
      };
    } else {
      return {
        type: ActionType.EMPTY_FAVORITES_PAGE,
        payload: true,
      };
    }
  },
  propertyPage: () => {
    return {
      type: ActionType.PROPERTY_PAGE,
      payload: true,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PROPERTY_ID:
      return extend(state, {
        propertyId: action.payload,
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
    case ActionType.EMPTY_FAVORITES_PAGE:
      return extend(state, {
        emptyFavoritesPage: action.payload,
      });
    case ActionType.PROPERTY_PAGE:
      return extend(state, {
        propertyPage: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
