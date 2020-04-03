import {initialState as DATA} from "./reducer/data/data";
import {initialState as MAIN} from "./reducer/main/main";
import {initialState as USER} from "./reducer/user/user";

const SortingDirection = {
  POPULAR: `Popular`,
  TO_HIGH: `Price: low to high`,
  TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

const PreviewImageSize = {
  placeCardWidth: `260`,
  placeCardHeight: `200`,
  favoritesCardWidth: `150`,
  favoritesCardHeight: `110`,
};

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`,
  OFFER_FOR_FAVORITES: `favorites__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`,
  CLASS_FOR_FAVORITES: `favorites__card`,
  PLACE_CARD_INFO: `place-card__info`,
  FAVORITES_CARD_INFO: `favorites__card-info place-card__info`,
};

const mainStyle = {
  classSelect: ClassArticle.CLASS_FOR_MAIN,
  prefix: ClassPrefixes.OFFER_FOR_MAIN,
  classCardInfo: ClassArticle.PLACE_CARD_INFO,
  width: PreviewImageSize.placeCardWidth,
  height: PreviewImageSize.placeCardHeight,
};

const propertyStyle = {
  classSelect: ClassArticle.CLASS_FOR_PROPERTY,
  prefix: ClassPrefixes.OFFER_FOR_PROPERTY,
  classCardInfo: ClassArticle.PLACE_CARD_INFO,
  width: PreviewImageSize.placeCardWidth,
  height: PreviewImageSize.placeCardHeight,
};

const favoritesStyle = {
  classSelect: ClassArticle.CLASS_FOR_FAVORITES,
  prefix: ClassPrefixes.OFFER_FOR_FAVORITES,
  classCardInfo: ClassArticle.FAVORITES_CARD_INFO,
  width: PreviewImageSize.favoritesCardWidth,
  height: PreviewImageSize.favoritesCardHeight,
};

const pageStyle = (page) => {
  switch (page) {
    case appRoute().FAVORITES:
      return ` page--favorites-empty`;
    case appRoute().OFFER:
      return ``;
    case appRoute().LOGIN:
      return ` page--gray page--login`;
    case appRoute().ROOT:
      return ` page--gray page--main`;
  }
  return ` page--gray page--main`;
};

const TestStore = {
  DATA,
  MAIN: Object.assign({}, MAIN, {property: {
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
  reviews: [
    {
      description: `Text`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      userId: 5,
      userAvatar: `path/path-1`,
      userName: `User`,
      proUser: false
    }]}),
  USER: Object.assign({}, USER, {authInfo: {
    email: `Oliver.conner@gmail.com`,
  }})
};

const appRoute = (id = `:id`) => {
  return {
    ROOT: `/`,
    LOGIN: `/login`,
    OFFER: `/offer/${id}`,
    FAVORITES: `/favorites`,
  };
};

const getSortType = (sortValue) => {
  switch (sortValue) {
    case `popular`:
      return SortingDirection.POPULAR;
    case `to-high`:
      return SortingDirection.TO_HIGH;
    case `to-low`:
      return SortingDirection.TO_LOW;
    case `top-rated`:
      return SortingDirection.TOP_RATED;
  }
  return SortingDirection.POPULAR;
}

export {mainStyle, propertyStyle, favoritesStyle, TestStore, pageStyle, appRoute, getSortType};
