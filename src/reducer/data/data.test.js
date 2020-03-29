import {reducer, ActionType, ActionCreator} from "../../reducer/data/data";

const rawOffers = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Hamburg`
    },
    description: `Text`,
    goods: [`text 1`],
    host: {
      // eslint-disable-next-line camelcase
      avatar_url: `path 1`,
      id: 3,
      // eslint-disable-next-line camelcase
      is_pro: true,
      name: `text 1`
    },
    id: 1,
    images: [`path 1`],
    // eslint-disable-next-line camelcase
    is_favorite: false,
    // eslint-disable-next-line camelcase
    is_premium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    // eslint-disable-next-line camelcase
    max_adults: 1,
    // eslint-disable-next-line camelcase
    preview_image: `path 1`,
    price: 1,
    rating: 4,
    title: `Title text 1`,
    type: `type text 1`
  },
];

const offers = [
  {
    id: 1,
    city: `Hamburg`,
    cityCoords: [52.370216, 4.895168],
    cityZoom: 10,
    propertyImage: [`path 1`],
    title: `Title text 1`,
    mark: `Premium`,
    previewImage: `path 1`,
    price: 1,
    bookmark: false,
    propertyText: `Text`,
    rating: {
      star: (Math.floor(4) / 5) * 100,
      value: 4,
    },
    features: {
      entire: `type text 1`,
      bedrooms: 1,
      adults: 1,
    },
    insideList: [
      `text 1`,
    ],
    host: {
      avatarUrl: `path 1`,
      id: 3,
      name: `text 1`,
      isPro: true,
    },
    coords: [
      52.3909553943508,
      4.85309666406198
    ],
    coordsZoom: 8,
  }
];

test(`Reducer without additional parameter should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
    city: ``,
  });
});

test(`Reducer should set city by a given value`, () => {
  expect(reducer({
    offers,
    city: ``,
  }, {
    type: ActionType.SET_CITY,
    payload: `Hamburg`,
  })).toEqual(
      {
        offers,
        city: `Hamburg`,
      }
  );
});

test(`Reducer should changes current city by a given value`, () => {
  expect(reducer({
    offers,
    city: `Amsterdam`,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Hamburg`,
  })).toEqual(
      {
        offers,
        city: `Hamburg`,
      }
  );
});

test(`Reducer should load offers`, () => {
  expect(reducer({
    offers: [],
    city: `Hamburg`,
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })).toEqual(
      {
        offers,
        city: `Hamburg`,
      }
  );
});

describe(`Action creators work correctly`, () => {
  test(`Action creators for load offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(rawOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  test(`Action creators for set city returns correct action`, () => {
    expect(ActionCreator.setCity(rawOffers)).toEqual({
      type: ActionType.SET_CITY,
      payload: `Hamburg`,
    });
  });

  test(`Action creators for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });
});
