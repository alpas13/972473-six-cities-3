import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const titleOfferHandler = () => {};

const titlesOffers = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

it(`Render Main correctly`, () => {
  const tree = renderer.create(
      <Main offersCount={3} titlesOffers={titlesOffers} onTitleOfferClick={titleOfferHandler}/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
