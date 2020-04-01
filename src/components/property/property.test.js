import * as React from "react";
import * as renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import Property from "./property";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";
import ReviewsList from "../reviews-list/reviews-list";
import ReviewForm from "../review-form/review-form.jsx";
import {propertyStyle} from "../../const";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const offer = {
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
};

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

const reviews = [
  {
    description: `Text`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    userId: 5,
    userAvatar: `path/path-1`,
    userName: `User`,
    proUser: false
  }
];

const authInfo = {
  email: `Oliver.conner@gmail.com`,
};

test(`Correctly render Property component`, () => {
  const store = mockStore(TestStore);
  const updateOfferId = jest.fn();
  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Property
            match={{params: {id: 1}}}
            offerId={1}
            offer={offer}
            offers={offers}
            authInfo={authInfo}
            handleMouse={() => {}}
            getLoginPage={() => {}}
            toggleFavoriteItem={() => {}}
            sendReview={() => {}}
            activePin={[
              52.3909553943508,
              4.85309666406198
            ]}
            updateOfferId={updateOfferId}
          >
            <ReviewsList
              reviews={reviews}
            />
            <ReviewForm
              rating={``}
              comment={``}
              status={true}
              handleChangeRating={() => {}}
              handleChangeTextarea={() => {}}
              handleSubmit={() => {}}
            />
            <Map
              offers={offers}
              activePin={[
                52.3909553943508,
                4.85309666406198
              ]}
              styleSettings={{height: `597px`}}
            />
            <OffersList
              offers={offers}
              styleSettings={propertyStyle}
              handleSelectItem={() => {}}
            />
          </Property>
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
