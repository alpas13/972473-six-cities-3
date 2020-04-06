import * as React from "react";
import * as renderer from "react-test-renderer";
import {App} from "./app";
import Main from "../main/main";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import configureStore from "redux-mock-store";
import {noop} from "../../utils";

const mockStore = configureStore([]);

test(`Render App correctly`, () => {
  const store = mockStore(TestStore);
  const tree = renderer.create(
      <Provider store={store}>
        <App
          login={noop}
          authorizationStatus={`NO_AUTH`}
        >
          <Main />
        </App>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
