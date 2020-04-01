import React from "react";
import OfferCard from "./offer-card";
import {mainStyle} from "../../const";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

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

test(`Should not be console.error called`, () => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();

  // eslint-disable-next-line no-console
  expect(console.error).toHaveBeenCalledTimes(0);
});

test(`Mouseenter event over offer card pass data about this offer to handler`, () => {
  const onChange = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={offer}
        isFavorite={false}
        authInfo={null}
        styleSettings={mainStyle}
        onChange={onChange}
        getLoginPage={() => {}}
        toggleFavoriteItem={() => {}}
        onTitleOfferClick={() => {}}
      />);

  wrapper.simulate(`mouseenter`);

  expect(onChange.mock.calls[0][0]).toMatchObject(offer.coords);
});

test(`Should link of title be clicked`, () => {
  const onTitleOfferClick = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={offer}
        isFavorite={false}
        authInfo={null}
        styleSettings={mainStyle}
        onChange={() => {}}
        getLoginPage={() => {}}
        toggleFavoriteItem={() => {}}
        onTitleOfferClick={onTitleOfferClick}
      />);

  const titleLink = wrapper.find(`.place-card__name > Link`);
  titleLink.simulate(`click`);
  expect(onTitleOfferClick).toHaveBeenCalledTimes(1);
  expect(onTitleOfferClick.mock.calls[0][0]).toEqual(offer.id);
});
