import * as React from "react";
import * as renderer from "react-test-renderer";
import LocationsList from "./locations-list";
import {noop} from "../../utils";

test(`Correctly render LocationsList component`, () => {
  const tree = renderer.create(
      <LocationsList
        cities={[`Amsterdam`, `Hamburg`]}
        handleSelectItem={noop}
        activeItem={`Amsterdam`}
        onChange={noop}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
