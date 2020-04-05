import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";

test(`Correctly render AuthScreen component`, () => {
  const tree = renderer.create(
      <AuthScreen
        onSubmit={()=>{}}
        authorizationStatus={`NO_AUTH`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
