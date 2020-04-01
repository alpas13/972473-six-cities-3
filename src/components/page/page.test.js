import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import {PageWithRouter} from "./page.jsx";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import Main from "../main/main";

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

test(`Correctly render Favorites component`, () => {
  const store = mockStore(TestStore);
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PageWithRouter
            authorizationStatus={`NO_AUTH`}
            favorites={offers}
            currentPage={`mainPage`}
            authInfo={null}
            isFavorites={false}
            getFavoritesPage={() => {}}
            getLoginPage={() => {}}
          >
            <Main
              offers={offers}
              city={`Amsterdam`}
              cities={[`Amsterdam`, `Hamburg`]}
              onCityClick={() => {}}
              activePin={[
                52.3909553943508,
                4.85309666406198
              ]}
              handleMouse={() => {}}
              onSortingChange={()=>{}}
              sortType={`popular`}
            />
          </PageWithRouter>
        </BrowserRouter>
      </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
