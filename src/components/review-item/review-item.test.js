import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";

const review = {
  id: 1582457885645.192,
  userAvatar: `img/avatar-max.jpg`,
  userName: `Max`,
  rating: 80,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: new Date().toUTCString(),
};

test(`Correctly render ReviewItem component`, () => {
  const tree = renderer.create(
      <ReviewItem
        review={review}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
