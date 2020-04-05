import React from "react";
import renderer from "react-test-renderer";
import LocationsList from "./locations-list";

test(`Correctly render LocationsList component`, () => {
  const tree = renderer.create(
      <LocationsList
        cities={[`Amsterdam`, `Hamburg`]}
        onCityClick={()=>{}}
        handleSelectItem={() => {}}
        onChange={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
