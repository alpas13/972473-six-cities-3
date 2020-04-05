import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";

const review = {
  description: `Text`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  userId: 5,
  userAvatar: `path/path-1`,
  userName: `User`,
  proUser: false
};

test(`Correctly render ReviewItem component`, () => {
  const tree = renderer.create(
      <ReviewItem
        review={review}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
