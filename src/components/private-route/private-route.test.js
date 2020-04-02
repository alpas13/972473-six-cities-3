import React from "react";
import rerender from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from "./private-route";
import {appRoute} from "../../const";
import {Provider} from "react-redux";
import {TestStore} from "../../const";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

test(`Correctly render PrivateRoute component`, () => {
  const store = mockStore(TestStore);
  const tree = rerender.create(
      <Provider store={store}>
        <Router>
          <PrivateRoute
            render={() => {}}
            path={appRoute().FAVORITES}
            exact={true}
            authorizationStatus={`NO_AUTH`}
          />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
