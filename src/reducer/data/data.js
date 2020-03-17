import {extend} from "../../utils";

const initialState = {
  offers: [],
  city: ``,
  cities: [],
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const offerModel = (offers) => {
  return offers.map((offer) => {
    const {
      bedrooms,
      city,
      description: propertyText,
      goods: insideList,
      host,
      id,
      images: propertyImage,
      is_favorite: isFavorite,
      is_premium: isPremium,
      location,
      max_adults: adults,
      preview_image: previewImage,
      price,
      rating,
      title,
      type
    } = offer;
    return {
      id,
      city: city.name,
      cityCoords: [city.location.latitude, city.location.longitude],
      cityZoom:
      propertyImage,
      title,
      mark: isPremium ? `Premium` : ``,
      previewImage,
      price,
      bookmark: isFavorite,
      propertyText,
      rating: {
        star: (Math.floor(rating) / 5) * 100,
        value: rating,
      },
      features: {
        entire: type,
        bedrooms,
        adults,
      },
      insideList,
      host,
      coords: [location.latitude, location.longitude],
      coordsZoom: location.zoom,
    };
  });
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
      payload: offerModel(offers),
    };
  },
  setCity: (offers) => {
    return {
      type: ActionType.SET_CITY,
      payload: offerModel(offers)[0].city,
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
