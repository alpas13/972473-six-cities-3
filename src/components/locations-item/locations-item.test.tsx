import * as React from "react";
import * as renderer from "react-test-renderer";
import LocationsItem from "./locations-item";
import {noop} from "../../utils";

test(`Correctly render LocationItem component`, () => {
  const tree = renderer.create(
      <LocationsItem
        activeItem={`Amsterdam`}
        cityItem={`Amsterdam`}
        onChange={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
