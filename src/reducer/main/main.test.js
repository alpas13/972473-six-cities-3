import {reducer, ActionType, SortType, ActionCreator} from "../../reducer/main/main";

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
  }
];

const reviews = [
  {
    description: `Text`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    userId: 5,
    userAvatar: `path/path-1`,
    userName: `User`,
    proUser: false
  }
];

const rawReviews = [
  {
    comment: `Text`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      // eslint-disable-next-line camelcase
      avatar_url: `path/path-1`,
      id: 5,
      // eslint-disable-next-line camelcase
      is_pro: false,
      name: `User`
    }
  }
];

test(`Reducer without additional parameter should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  });
});

test(`Reducer should return state with reviews field contains data of given reviews`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: null,
        nearPlaces: [],
        reviews,
        favorites: [],
        favoritesPage: false,
        emptyFavoritesPage: false,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with property field contains data of given offer id`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.SET_PROPERTY_ID,
    payload: 1,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: 1,
        nearPlaces: [],
        reviews: [],
        favorites: [],
        favoritesPage: false,
        emptyFavoritesPage: false,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with nearPlaces field contains data of given offers`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.LOAD_NEAR_PLACES,
    payload: offers,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: null,
        nearPlaces: offers,
        reviews: [],
        favorites: [],
        favoritesPage: false,
        emptyFavoritesPage: false,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with sortType field contains given data`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.CHANGE_SORTING,
    payload: SortType.TOP_RATED,
  })).toEqual(
      {
        sortType: SortType.TOP_RATED,
        propertyId: null,
        nearPlaces: [],
        reviews: [],
        favorites: [],
        favoritesPage: false,
        emptyFavoritesPage: false,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with favorites field contains data of given offers`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.LOAD_FAVORITES,
    payload: offers,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: null,
        nearPlaces: [],
        reviews: [],
        favorites: offers,
        favoritesPage: false,
        emptyFavoritesPage: false,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with favoritesPage field contains given status`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.FAVORITES_PAGE,
    payload: true,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: null,
        nearPlaces: [],
        reviews: [],
        favorites: [],
        favoritesPage: true,
        emptyFavoritesPage: false,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with emptyFavoritesPage field contains given status`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.EMPTY_FAVORITES_PAGE,
    payload: true,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: null,
        nearPlaces: [],
        reviews: [],
        favorites: [],
        favoritesPage: false,
        emptyFavoritesPage: true,
        propertyPage: false,
      }
  );
});

test(`Reducer should return state with propertyPage field contains given status`, () => {
  expect(reducer({
    sortType: SortType.POPULAR,
    propertyId: null,
    nearPlaces: [],
    reviews: [],
    favorites: [],
    favoritesPage: false,
    emptyFavoritesPage: false,
    propertyPage: false,
  }, {
    type: ActionType.PROPERTY_PAGE,
    payload: true,
  })).toEqual(
      {
        sortType: SortType.POPULAR,
        propertyId: null,
        nearPlaces: [],
        reviews: [],
        favorites: [],
        favoritesPage: false,
        emptyFavoritesPage: false,
        propertyPage: true,
      }
  );
});

describe(`Action creators work correctly`, () => {
  test(`Action creators for set property returns correct action`, () => {
    expect(ActionCreator.setPropertyId(1)).toEqual({
      type: ActionType.SET_PROPERTY_ID,
      payload: 1,
    });
  });

  test(`Action creators for loading near place offers returns correct action`, () => {
    expect(ActionCreator.loadNearPlaceOffers(rawOffers)).toEqual({
      type: ActionType.LOAD_NEAR_PLACES,
      payload: offers,
    });
  });

  test(`Action creators for change sort type returns correct action`, () => {
    expect(ActionCreator.changeSorting(SortType.TOP_RATED)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: SortType.TOP_RATED,
    });
  });

  test(`Action creators for loading reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(rawReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });

  test(`Action creators for loading favorites returns correct action`, () => {
    expect(ActionCreator.loadFavorites(rawOffers)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    });
  });

  test(`Action creators for activating favorites page returns correct action`, () => {
    expect(ActionCreator.favoritesPage(true)).toEqual({
      type: ActionType.FAVORITES_PAGE,
      payload: true,
    });
  });

  test(`Action creators for activating empty favorites page returns correct action`, () => {
    expect(ActionCreator.favoritesPage(false)).toEqual({
      type: ActionType.EMPTY_FAVORITES_PAGE,
      payload: true,
    });
  });

  test(`Action creators for activating property page returns correct action`, () => {
    expect(ActionCreator.propertyPage()).toEqual({
      type: ActionType.PROPERTY_PAGE,
      payload: true,
    });
  });
});
