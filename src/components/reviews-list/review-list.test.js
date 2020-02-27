import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";

const offer = {
  id: 1582457615518.7898,
  city: `Hamburg`,
  userName: `Oliver.conner@gmail.com`,
  propertyImage: [`img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`],
  title: `Wood and stone place`,
  mark: null,
  previewImage: `img/room.jpg`,
  price: 80,
  bookmark: true,
  rating: {
    star: 80,
    value: 4.8,
  },
  features: {
    entire: `Private room`,
    bedrooms: 3,
    adults: 4,
  },
  insideList: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  hostName: `Angelina`,
  propertyText: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrandt Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
  coords: [
    52.3509553943508,
    4.879309666406198
  ],
  reviews: [
    {
      id: 1582457885645.192,
      userAvatar: `img/avatar-max.jpg`,
      userName: `Max`,
      rating: 80,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      date: new Date().toUTCString(),
    },
  ],
  neighbourhoodOffers: [
    1582457443027.0002,
    1582457508960.5964,
    1582457581305.9822
  ]
};

test(`Correctly render ReviewList component`, () => {
  const tree = renderer.create(
      <ReviewsList
        offer={offer}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
