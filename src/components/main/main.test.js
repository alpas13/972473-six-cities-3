import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import OffersList from "../offers-list/offers-list";

const mock = {
  offers: [
    {
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
      ]
    }
  ]
};

test(`Render Main correctly`, () => {
  const {offers} = mock;
  const tree = renderer.create(
      <Main offersCount = {3}>
        <OffersList
          offers={offers}
          onTitleOfferClick={() => {}}
        />
      </Main>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
