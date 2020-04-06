import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Favorites} from "./favorites";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import {Offer} from "../../types";

const mockStore = configureStore([]);

const offers: Offer[] = [
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

test(`Correctly render Favorites component`, () => {
  const store = mockStore(TestStore);
  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Favorites
            offers={offers}
          >
          </Favorites>
        </Router>
      </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
