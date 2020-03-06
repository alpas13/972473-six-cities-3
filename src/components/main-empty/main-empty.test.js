import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";

test(`Correctly render MainEmpty component`, () => {
  const tree = renderer.create(
      <MainEmpty/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
