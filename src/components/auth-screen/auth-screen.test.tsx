import * as React from "react";
import * as renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";
import {noop} from "../../utils";

test(`Correctly render AuthScreen component`, () => {
  const tree = renderer.create(
      <AuthScreen
        onSubmit={noop}
        authorizationStatus={`NO_AUTH`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
