import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withHandleForm from "./with-handle-form.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withHandleForm(MockComponent);

test(`Should state change`, () => {
  const wrapper = shallow(<MockComponentWrapped
    offerId={1}
    onSubmit={() => {}}
    handleChangeRating={() => {}}
    handleChangeTextarea={() => {}}
    handleSubmit={() => {}}
  />);

  wrapper.props().handleChangeRating(`changed state`);
  wrapper.props().handleChangeTextarea(`changed state`);
  expect(wrapper.props().rating).toEqual(`changed state`);
  expect(wrapper.props().comment).toEqual(`changed state`);
});
