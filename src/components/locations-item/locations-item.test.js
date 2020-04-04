import React from "react";
import renderer from "react-test-renderer";
import LocationsItem from "./locations-item";

test(`Correctly render LocationItem component`, () => {
  const tree = renderer.create(
      <LocationsItem
        cityItem={`Amsterdam`}
        onChange={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
