import React from "react";
import renderer from "react-test-renderer";
import Property from "./property";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";
import ReviewsList from "../reviews-list/reviews-list";

const mock = {
  offer:
    {
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
      ],
      reviews: [
        {
          id: 1582457643553.8105,
          userAvatar: `img/avatar-max.jpg`,
          userName: `Max`,
          rating: 80,
          description: `The building is green and from 18th century.`,
          date: new Date().toUTCString(),
        },
      ],
      neighbourhoodOffers: [
        1582457443027.0002,
        1582457508960.5964,
        1582457581305.9822,
      ]
    }
};

const mocks = {
  offers: [
    {
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
      ],
      reviews: [
        {
          id: 1582457643553.8105,
          userAvatar: `img/avatar-max.jpg`,
          userName: `Max`,
          rating: 80,
          description: `The building is green and from 18th century.`,
          date: new Date().toUTCString(),
        },
      ],
      neighbourhoodOffers: [
        1582457443027.0002,
        1582457508960.5964,
        1582457581305.9822,
      ]
    }
  ]
};

const ClassPrefixes = {
  OFFER_FOR_MAIN: `cities__`,
  OFFER_FOR_PROPERTY: `near-places__`
};

const ClassArticle = {
  CLASS_FOR_MAIN: `cities__place-card`,
  CLASS_FOR_PROPERTY: `near-places__card`
};

test(`Correctly render Property component`, () => {
  const {offer} = mock;
  const {offers} = mocks;
  const propertyStyle = {
    classSelect: ClassArticle.CLASS_FOR_PROPERTY,
    prefix: ClassPrefixes.OFFER_FOR_PROPERTY
  };

  const tree = renderer.create(
      <Property
        offers={offers}
        offer={offer}
        styleSettings={propertyStyle}
      >
        <OffersList
          key={1}
          offers={offers}
          onTitleOfferClick={()=>{}}
          styleSettings={propertyStyle}
          onCardMapPinToggle={()=>{}}
        />,
        <ReviewsList
          offer={offer}
        />,
        <Map
          key={2}
          offers={offers}
          styleSettings={{height: `597px`}}/>
      </Property>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
