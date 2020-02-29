import React from "react";
import rerender from "react-test-renderer";
import PlacesSorting from "./places-sorting";

test(`Correctly render PlaceSorting component`, () => {
  const tree = rerender.create(
      <PlacesSorting
        city={`Amsterdam`}
        sortType={`popular`}
        onSortingChange={()=>{}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
