import React from "react";
import withHandleForm from "./with-handle-form";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withHandleForm(MockComponent);

test(`Submit event pass review to handler`, () => {
  const sendReview = jest.fn();

  const wrapper = mount(
      <MockComponentWrapped
        offerId={1}
        onSubmit={() => {}}
        handleChangeRating={() => {}}
        handleChangeTextarea={() => {}}
        handleSubmit={sendReview}
      />);

  wrapper.props().rating = `3`;
  wrapper.props().comment = `text`;
  const callback = () => {};

  wrapper.props().handleSubmit(1, {rating: wrapper.props().rating, comment: wrapper.props().comment}, callback);
  expect(sendReview).toHaveBeenCalledWith(1, {rating: `3`, comment: `text`}, callback);
});
