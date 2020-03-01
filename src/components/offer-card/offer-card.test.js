import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card";

const mock = {
  offer: {
    userName: `user-name 1`,
    propertyImage: [`path 1`],
    title: `Title text 1`,
    mark: `mark 1`,
    previewImage: `path 1`,
    price: 1,
    bookmark: false,
    rating: {
      star: 1,
      value: 1,
    },
    features: {
      entire: `type text 1`,
      bedrooms: 1,
      adults: 1,
    },
    insideList: [
      `text 1`,
    ],
    hostName: `text 1`,
    propertyText: [
      `text 1`,
      `text 1`
    ],
    coords: [
      52.3909553943508,
      4.85309666406198
    ]
  }
};

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`
};

test(`Correctly render OfferCard component`, () => {
  const {offer} = mock;
  const mainStyle = {
    classSelect: ClassArticle.CLASS_FOR_MAIN,
    prefix: ClassPrefixes.OFFER_FOR_MAIN
  };
  const tree = renderer.create(
      <OfferCard
        onTitleOfferClick={() => {}}
        onCardMapPinToggle={() => {}}
        offer={offer}
        styleSettings={mainStyle}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
