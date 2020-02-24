import React from "react";
import OfferCard from "./offer-card";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const mock = {
  offer: {
    title: ``,
    mark: ``,
    previewImage: ``,
    price: 1,
    bookmark: false,
    rating: {
      star: 1
    },
    features: {
      entire: ``
    },
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

test(`Mouseover event over offer card pass data about this offer to handler`, () => {
  const {offer} = mock;
  const onCardMouseOver = jest.fn();
  const mainStyle = {
    classSelect: ClassArticle.CLASS_FOR_MAIN,
    prefix: ClassPrefixes.OFFER_FOR_MAIN
  };

  const wrapper = shallow(<OfferCard
    onTitleOfferClick={() => {}}
    onCardMouseOver={onCardMouseOver}
    offer={offer}
    styleSettings={mainStyle}
  />);

  wrapper.simulate(`mouseover`);

  expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(offer);
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
    onCardMouseOver={() => {}}
    offer={offer}
    styleSettings={mainStyle}
  />);

  const titleLink = wrapper.find(`.place-card__name > a`);
  titleLink.simulate(`click`);
  expect(onTitleOfferClick).toHaveBeenCalledTimes(1);
  expect(onTitleOfferClick.mock.calls[0][0]).toMatchObject(offer);
});
