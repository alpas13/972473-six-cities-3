import * as React from "react";
import * as renderer from "react-test-renderer";
import {App} from "./app";
import Main from "../main/main";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const mock = {
  offers: [
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
  ]
};

test(`Render App correctly`, () => {
  const store = mockStore(TestStore);
  const {offers} = mock;
  const tree = renderer.create(
      <Provider store={store}>
        <App
          favorites={offers}
          offers={offers}
          favoritesPage={false}
          emptyFavoritesPage={false}
          login={() => {}}
          authorizationStatus={`NO_AUTH`}
          loginPage={false}
          propertyPage={false}
        >
          <Main />
        </App>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
