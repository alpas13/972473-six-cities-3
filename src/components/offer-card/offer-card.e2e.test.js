import React from "react";
import OfferCard from "./offer-card";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const mock = {
  offer: {
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
};

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`
};

test(`Should not be console.error called`, () => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();

  // eslint-disable-next-line no-console
  expect(console.error).toHaveBeenCalledTimes(0);
});

test(`Mouseenter event over offer card pass data about this offer to handler`, () => {
  const {offer} = mock;
  const onCardMapPinToggle = jest.fn();
  const mainStyle = {
    classSelect: ClassArticle.CLASS_FOR_MAIN,
    prefix: ClassPrefixes.OFFER_FOR_MAIN
  };

  const wrapper = shallow(<OfferCard
    onTitleOfferClick={() => {}}
    onCardMapPinToggle={onCardMapPinToggle}
    offer={offer}
    styleSettings={mainStyle}
  />);

  wrapper.simulate(`mouseenter`);

  expect(onCardMapPinToggle.mock.calls[0][0]).toMatchObject(offer.coords);
});

test(`Should link of title be clicked`, () => {
  const {offer} = mock;
  const onTitleOfferClick = jest.fn();
  const mainStyle = {
    classSelect: ClassArticle.CLASS_FOR_MAIN,
    prefix: ClassPrefixes.OFFER_FOR_MAIN
  };

  const wrapper = shallow(<OfferCard
    onTitleOfferClick={onTitleOfferClick}
    offer={offer}
    styleSettings={mainStyle}
    onCardMapPinToggle={() => {}}
  />);

  const titleLink = wrapper.find(`.place-card__name > a`);
  titleLink.simulate(`click`);
  expect(onTitleOfferClick).toHaveBeenCalledTimes(1);
  expect(onTitleOfferClick.mock.calls[0][0]).toMatchObject(offer);
});
