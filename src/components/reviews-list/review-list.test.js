import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {TestStore} from "../../const";

const mockStore = configureStore([]);

const reviews = [
  {
    description: `Text`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    userId: 5,
    userAvatar: `path/path-1`,
    userName: `User`,
    proUser: false
  }
];

test(`Correctly render ReviewList component`, () => {
  const store = mockStore(TestStore);
  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsList
          reviews={reviews}
        />
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
