import React from "react";
import renderer from "react-test-renderer";
import FavoritesEmpty from "./favorites-empty.jsx";

test(`Correctly render FavoritesEmpty component`, () => {
  const tree = renderer.create(
      <FavoritesEmpty/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
