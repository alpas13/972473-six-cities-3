import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewForm from "./review-form";
import {noop} from "../../utils";

test(`Correctly render ReviewItem component`, () => {
  const tree = renderer.create(
      <ReviewForm
        rating={``}
        comment={``}
        status={true}
        handleChangeRating={noop}
        handleChangeTextarea={noop}
        handleSubmit={noop}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
