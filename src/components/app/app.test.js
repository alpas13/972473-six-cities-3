import React from "react";
import rerender from "react-test-renderer";
import App from "./app";

const titlesOffers = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

it(`Render App correctly`, () => {
  const tree = rerender.create(
      <App offersCount={3} titlesOffers={titlesOffers}/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
