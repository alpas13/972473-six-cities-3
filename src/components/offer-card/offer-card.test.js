import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card";

const mock = {
  offer: {
    title: `Title text 1`,
    mark: `mark 1`,
    previewImage: `path 1`,
    price: 1,
    bookmark: false,
    rating: {
      star: 1
    },
    features: {
      entire: `type text 1`,
    },
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
        onCardMouseOver={() => {}}
        offer={offer}
        styleSettings={mainStyle}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
