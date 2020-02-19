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

test(`Correctly render OfferCard component`, () => {
  const {offer} = mock;
  const tree = renderer.create(
      <OfferCard
        onTitleOfferClick={() => {}}
        onCardMouseOver={() => {}}
        offer={offer}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
