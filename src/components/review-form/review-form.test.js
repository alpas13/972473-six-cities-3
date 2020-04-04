import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";

test(`Correctly render ReviewItem component`, () => {
  const tree = renderer.create(
      <ReviewForm
        rating={``}
        comment={``}
        status={true}
        handleChangeRating={() => {}}
        handleChangeTextarea={() => {}}
        handleSubmit={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
