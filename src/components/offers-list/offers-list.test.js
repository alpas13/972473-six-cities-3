import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import renderer from "react-test-renderer";
import OffersList from "./offers-list";
import {mainStyle} from "../../const";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const offers = [
  {
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
  }
];

test(`Correctly render OffersList component`, () => {
  const store = mockStore(TestStore);
  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <OffersList
            offers={offers}
            authInfo={`NO_AUTH`}
            favoritesId={[1]}
            onTitleOfferClick={() => {}}
            styleSettings={mainStyle}
            onChange={() => {}}
            toggleFavoriteItem={() => {}}
          />
        </Router>
      </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
