import React from "react";
import renderer from "react-test-renderer";
import LocationsList from "./locations-list";

test(`Correctly render LocationsList component`, () => {
  const tree = renderer.create(
      <LocationsList
        city={`Amsterdam`}
        cities={[`Amsterdam`, `Hamburg`]}
        onCityClick={()=>{}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});