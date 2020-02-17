import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const mock = {
  offers: [
    {
      id: Date.now() + Math.random(),
      title: `Title text 1`,
      mark: `mark 1`,
      previewImage: `path 1`,
      price: 1,
      bookmark: false,
      rating: 1,
      type: `type text 1`
    },
    {
      id: Date.now() + Math.random(),
      title: `Title text 2`,
      mark: `mark 2`,
      previewImage: `path 2`,
      price: 2,
      bookmark: true,
      rating: 2,
      type: `type text 2`
    },
    {
      id: Date.now() + Math.random(),
      title: `Title text 3`,
      mark: `mark 3`,
      previewImage: `path 3`,
      price: 3,
      bookmark: false,
      rating: 3,
      type: `type text 3`
    },
    {
      id: Date.now() + Math.random(),
      title: `Title text 4`,
      mark: `mark 4`,
      previewImage: `path 4`,
      price: 4,
      bookmark: false,
      rating: 4,
      type: `type text 4`
    }
  ]
};

test(`Render Main correctly`, () => {
  const {offers} = mock;
  const tree = renderer.create(
      <Main
        offersCount={3}
        offers={offers}
        onTitleOfferClick={() => {}}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
