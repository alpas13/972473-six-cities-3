import React from "react";
import rerender from "react-test-renderer";
import App from "./app";
import Main from "../main/main";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";

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

test(`Render App correctly`, () => {
  const {offers} = mock;
  const tree = rerender.create(
      <App
        offersCount={3}
        offers={offers}
        city={`Amsterdam`}
      >
        <Main>
          <OffersList
            offersCount={3}
            offers={offers}
            city={`Amsterdam`}
            onTitleOfferClick={() => {}}
          />
          <Map offers={offers} />
        </Main>
      </App>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
