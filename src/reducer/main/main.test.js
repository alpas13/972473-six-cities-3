import {reducer} from "../../reducer/main/main";
import {SortType} from "./main";

/* const offers = [
  {
    id: 1,
    city: `Hamburg`,
    cityCoords: [52.3909553943508, 4.85309666406198],
    cityZoom: 9,
    propertyImage: [`path 1`],
    title: `Title text 1`,
    mark: `Premium`,
    previewImage: `path 1`,
    price: 1,
    bookmark: true,
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
  },
  {
    id: 2,
    city: `Hamburg`,
    cityCoords: [52.3909553943508, 4.85309666406198],
    cityZoom: 9,
    propertyImage: [`path 2`],
    title: `Title text 2`,
    mark: `Premium`,
    previewImage: `path 2`,
    price: 1,
    bookmark: true,
    propertyText: `Text`,
    rating: {
      star: (Math.floor(4) / 5) * 100,
      value: 4,
    },
    features: {
      entire: `type text 2`,
      bedrooms: 1,
      adults: 1,
    },
    insideList: [
      `text 2`,
    ],
    host: {
      avatarUrl: `path 2`,
      id: 3,
      name: `text 2`,
      isPro: true,
    },
    coords: [
      52.3920553943508,
      4.85609666406198
    ],
    coordsZoom: 8,
  },
  {
    id: 3,
    city: `Hamburg`,
    cityCoords: [52.3909553943508, 4.85309666406198],
    cityZoom: 9,
    propertyImage: [`path 3`],
    title: `Title text 3`,
    mark: `Premium`,
    previewImage: `path 3`,
    price: 1,
    bookmark: true,
    propertyText: `Text`,
    rating: {
      star: (Math.floor(4) / 5) * 100,
      value: 4,
    },
    features: {
      entire: `type text 3`,
      bedrooms: 1,
      adults: 1,
    },
    insideList: [
      `text 3`,
    ],
    host: {
      avatarUrl: `path 3`,
      id: 3,
      name: `text 3`,
      isPro: true,
    },
    coords: [
      52.3970553943508,
      4.85209666406198
    ],
    coordsZoom: 8,
  },
  {
    id: 4,
    city: `Hamburg`,
    cityCoords: [52.3909553943508, 4.85309666406198],
    cityZoom: 9,
    propertyImage: [`path 4`],
    title: `Title text 4`,
    mark: `Premium`,
    previewImage: `path 4`,
    price: 1,
    bookmark: true,
    propertyText: `Text`,
    rating: {
      star: (Math.floor(4) / 5) * 100,
      value: 4,
    },
    features: {
      entire: `type text 4`,
      bedrooms: 1,
      adults: 1,
    },
    insideList: [
      `text 4`,
    ],
    host: {
      avatarUrl: `path 4`,
      id: 3,
      name: `text 4`,
      isPro: true,
    },
    coords: [
      52.3930553943508,
      4.85809666406198
    ],
    coordsZoom: 8,
  },
  {
    id: 5,
    city: `Hamburg`,
    cityCoords: [52.3909553943508, 4.85309666406198],
    cityZoom: 9,
    propertyImage: [`path 5`],
    title: `Title text 5`,
    mark: `Premium`,
    previewImage: `path 5`,
    price: 1,
    bookmark: true,
    propertyText: `Text`,
    rating: {
      star: (Math.floor(4) / 5) * 100,
      value: 4,
    },
    features: {
      entire: `type text 5`,
      bedrooms: 1,
      adults: 1,
    },
    insideList: [
      `text 5`,
    ],
    host: {
      avatarUrl: `path 5`,
      id: 3,
      name: `text 5`,
      isPro: true,
    },
    coords: [
      52.3909553943508,
      4.85309666406198
    ],
    coordsZoom: 8,
  },
];*/

test(`Reducer without additional parameter should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: SortType.POPULAR,
    property: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  });
});

/* test(`Reducer should gives current offers by filtered with a given value`, () => {
  expect(reducer({
    offers,
    city: `Amsterdam`,
  }, {
    type: ActionType.GET_OFFERS,
    payload: offers,
  })).toEqual(
      {
        offers,
        city: `Amsterdam`,
      }
  );
});

test(`Reducer should gives an offer by filtered with a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
  }, {
    type: ActionType.GET_PROPERTY,
    payload: offers.slice(1),
  })).toEqual(
      {
        city: `Amsterdam`,
        offers,
        cities: [`Amsterdam`, `Hamburg`],
        sortType: `popular`,
        property: offers.slice(1),
        nearPlaces: null,
      }
  );
});

test(`Reducer should gives nearPlaces offers by filtered with a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
  }, {
    type: ActionType.GET_NEAR_PLACES,
    payload: offers.slice(1, 4),
  })).toEqual(
      {
        city: `Amsterdam`,
        offers,
        cities: [`Amsterdam`, `Hamburg`],
        sortType: `popular`,
        property: null,
        nearPlaces: offers.slice(1, 4),
      }
  );
});

describe(`Action creators work correctly`, () => {
  test(`Action creators for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Hamburg`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Hamburg`,
    }
    );
  });

  test(`Action creators for getting offers returns correct action`, () => {
    expect(ActionCreator.getOffers(`Hamburg`)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: offers.slice(4, 5),
    }
    );
  });

  test(`Action creators for getting property returns correct action`, () => {
    expect(ActionCreator.getProperty(offers.slice(0, 1)[0])).toEqual({
      type: ActionType.GET_PROPERTY,
      payload: offers.slice(0, 1)[0],
    }
    );
  });

  test(`Action creators for getting nerPlaces returns correct action`, () => {
    expect(ActionCreator.getNearPlaces(offers.slice(0, 1)[0])).toEqual({
      type: ActionType.GET_NEAR_PLACES,
      payload: offers.slice(1, 4),
    }
    );
  });
});*/
