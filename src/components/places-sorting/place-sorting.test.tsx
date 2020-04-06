import * as React from "react";
import * as rerender from "react-test-renderer";
import PlacesSorting from "./places-sorting";
import {noop} from "../../utils";

test(`Correctly render PlaceSorting component`, () => {
  const tree = rerender.create(
      <PlacesSorting
        isOpen={false}
        sortType={`popular`}
        onSortingPopupToggle={noop}
        onSortChange={noop}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
