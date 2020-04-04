import React from "react";
import rerender from "react-test-renderer";
import PlacesSorting from "./places-sorting";

test(`Correctly render PlaceSorting component`, () => {
  const tree = rerender.create(
      <PlacesSorting
        isOpen={false}
        city={`Amsterdam`}
        sortType={`popular`}
        onSortingPopupToggle={() => {}}
        onSortingChange={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
