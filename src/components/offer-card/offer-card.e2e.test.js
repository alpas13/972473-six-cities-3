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

test(`Mouseover event over offer card pass data about this offer to handler`, () => {
  const {offer} = mock;
  const onCardMouseOver = jest.fn();

  const wrapper = shallow(<OfferCard
    onTitleOfferClick={() => {}}
    onCardMouseOver={onCardMouseOver}
    offer={offer}/>);

  wrapper.simulate(`mouseover`);

  expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(offer);
});

test(`Should link of title be clicked`, () => {
  const {offer} = mock;
  const onTitleOfferClick = jest.fn();

  const wrapper = shallow(<OfferCard
    onTitleOfferClick={onTitleOfferClick}
    onCardMouseOver={() => {}}
    offer={offer}/>);

  const titleLink = wrapper.find(`.place-card__name > a`);
  titleLink.simulate(`click`);
  expect(onTitleOfferClick).toHaveBeenCalledTimes(1);
});
