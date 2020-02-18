import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card";

const mock = {
  offer: {
    id: Date.now() + Math.random(),
    title: `Title text 1`,
    mark: `mark 1`,
    previewImage: `path 1`,
    price: 1,
    bookmark: false,
    rating: 1,
    type: `type text 1`
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
