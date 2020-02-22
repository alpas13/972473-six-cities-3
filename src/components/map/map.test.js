import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";

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
      ],
      coords: [
        52.3909553943508,
        4.85309666406198
      ]
    }
  ]
};

test(`Correctly render Map component`, () => {
  const {offers} = mock;
  const tree = renderer.create(
      <Map offers={offers}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
