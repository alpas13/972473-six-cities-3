import React, {Fragment} from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import {mainStyle} from "../../const";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import configureStore from "redux-mock-store";
import Map from "../map/map.jsx";

configure({adapter: new Adapter()});

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

test(`Mouseleave event should pass null to handler`, () => {
  const store = mockStore(TestStore);
  const handleMouse = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <Fragment>
          <Main
            offers={offers}
            city={`Amsterdam`}
            cities={[`Amsterdam`, `Hamburg`]}
            onCityClick={() => {}}
            activePin={[
              52.3909553943508,
              4.85309666406198
            ]}
            handleMouse={handleMouse}
            onSortingChange={()=>{}}
            sortType={`popular`}
          >
            <OffersList
              offers={offers}
              onTitleOfferClick={() => {}}
              styleSettings={mainStyle}
              onChange={()=>{}}
            />
            <Map
              styleSettings={{height: `800px`, top: `170px`}}
              offers={offers}
            />
          </Main>
        </Fragment>
      </Provider>
  );

  const offersContainer = wrapper.find(`.cities__places-list`);

  offersContainer.simulate(`mouseleave`);

  expect(handleMouse.mock.calls[0][0]).toEqual(null);
});
