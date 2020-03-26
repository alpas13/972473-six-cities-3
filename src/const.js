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

export {mainStyle, propertyStyle, favoritesStyle};
