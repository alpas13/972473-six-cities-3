import {keyIdGenerator} from "../tools/tools.js";

const offers = [
  {
    id: keyIdGenerator(),
    userName: `Oliver.conner@gmail.com`,
    propertyImage: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    title: `Beautiful & luxurious apartment at great location`,
    mark: `Premium`,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    bookmark: false,
    rating: {
      star: 80,
      value: 4.8,
    },
    features: {
      entire: `Apartment`,
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
      52.3909553943508,
      4.85309666406198
    ],
    reviews: [
      {
        id: keyIdGenerator(),
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
  },
  {
    id: keyIdGenerator(),
    userName: `Oliver.conner@gmail.com`,
    propertyImage: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
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
      52.369553943508,
      4.85309666406198
    ],
    reviews: [
      {
        id: keyIdGenerator(),
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
  },
  {
    id: keyIdGenerator(),
    userName: `Oliver.conner@gmail.com`,
    propertyImage: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    title: `Canal View Prinsengracht`,
    mark: null,
    previewImage: `img/apartment-02.jpg`,
    price: 132,
    bookmark: false,
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
      52.3909553943508,
      4.929309666406198
    ],
    reviews: [
      {
        id: keyIdGenerator(),
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
  },
  {
    id: keyIdGenerator(),
    userName: `Oliver.conner@gmail.com`,
    propertyImage: [`img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`],
    title: `Nice, cozy, warm big bed apartment`,
    mark: `premium`,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    bookmark: false,
    rating: {
      star: 80,
      value: 4.8,
    },
    features: {
      entire: `Apartment`,
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
      52.3809553943508,
      4.939309666406198
    ],
    reviews: [
      {
        id: keyIdGenerator(),
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
  },
  {
    id: keyIdGenerator(),
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
        id: keyIdGenerator(),
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
  },
];

export default offers;
