import {reducer, ActionType, ActionCreator} from "./reducer.js";

const offers = [
  {
    id: 1582457380088.0583,
    city: `Amsterdam`,
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
        id: 1582457643553.8105,
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
      1582457581305.9822,
    ]
  },
  {
    id: 1582457443027.0002,
    city: `Amsterdam`,
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
        id: 1582457766133.881,
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
    neighbourhoodOffers: [
      1582457380088.0583,
      1582457508960.5964,
      1582457581305.9822
    ]
  },
  {
    id: 1582457508960.5964,
    city: `Amsterdam`,
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
        id: 1582457796383.7314,
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
        rating: 80,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date().toUTCString(),
      },
    ],
    neighbourhoodOffers: [
      1582457443027.0002,
      1582457581305.9822,
      1582457615518.7898
    ]
  },
  {
    id: 1582457581305.9822,
    city: `Amsterdam`,
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
        id: 1582457828323.001,
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
      1582457615518.7898
    ]
  },
  {
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
  },
];

test(`Reducer without additional parameter should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: `Amsterdam`,
    offers: offers.slice(0, 4),
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
    activePin: null,
  });
});

test(`Reducer should changes current city by a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
    activePin: null,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Hamburg`,
  })).toEqual(
      {
        city: `Hamburg`,
        offers,
        cities: [`Amsterdam`, `Hamburg`],
        sortType: `popular`,
        property: null,
        nearPlaces: null,
        activePin: null,
      }
  );
});

test(`Reducer should gives current offers by filtered with a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
    activePin: null,
  }, {
    type: ActionType.GET_OFFERS,
    payload: offers,
  })).toEqual(
      {
        city: `Amsterdam`,
        offers,
        cities: [`Amsterdam`, `Hamburg`],
        sortType: `popular`,
        property: null,
        nearPlaces: null,
        activePin: null,
      }
  );
});

test(`Reducer should gives an offer by filtered with a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
    activePin: null,
  }, {
    type: ActionType.GET_PROPERTY,
    payload: offers.slice(1),
  })).toEqual(
      {
        city: `Amsterdam`,
        offers,
        cities: [`Amsterdam`, `Hamburg`],
        sortType: `popular`,
        property: offers.slice(1),
        nearPlaces: null,
        activePin: null,
      }
  );
});

test(`Reducer should gives nearPlaces offers by filtered with a given value`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers,
    cities: [`Amsterdam`, `Hamburg`],
    sortType: `popular`,
    property: null,
    nearPlaces: null,
    activePin: null,
  }, {
    type: ActionType.GET_NEAR_PLACES,
    payload: offers.slice(1, 4),
  })).toEqual(
      {
        city: `Amsterdam`,
        offers,
        cities: [`Amsterdam`, `Hamburg`],
        sortType: `popular`,
        property: null,
        nearPlaces: offers.slice(1, 4),
        activePin: null,
      }
  );
});

describe(`Action creators work correctly`, () => {
  test(`Action creators for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Hamburg`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Hamburg`,
    }
    );
  });

  test(`Action creators for getting offers returns correct action`, () => {
    expect(ActionCreator.getOffers(`Hamburg`)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: offers.slice(4, 5),
    }
    );
  });

  test(`Action creators for getting property returns correct action`, () => {
    expect(ActionCreator.getProperty(offers.slice(0, 1)[0])).toEqual({
      type: ActionType.GET_PROPERTY,
      payload: offers.slice(0, 1)[0],
    }
    );
  });

  test(`Action creators for getting nerPlaces returns correct action`, () => {
    expect(ActionCreator.getNearPlaces(offers.slice(0, 1)[0])).toEqual({
      type: ActionType.GET_NEAR_PLACES,
      payload: offers.slice(1, 4),
    }
    );
  });

  test(`Action creators for activePin when mouse moved over offer Card returns correct action`, () => {
    expect(ActionCreator.activatePin(offers.slice(0, 1)[0].coords)).toEqual({
      type: ActionType.ACTIVATE_PIN,
      payload: offers.slice(0, 1)[0].coords,
    });
  });

  test(`Action creators for activePin when mouse moved out from offer Card returns correct action`, () => {
    expect(ActionCreator.activatePin(null)).toEqual({
      type: ActionType.ACTIVATE_PIN,
      payload: null,
    });
  });
});
