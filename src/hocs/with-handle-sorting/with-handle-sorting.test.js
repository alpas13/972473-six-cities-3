import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withHandleSorting from "./with-handle-sorting";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withHandleSorting(MockComponent);

test(`Should state change`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        city={`Amsterdam`}
        isOpen={false}
        sortType={`popular`}
        onSortingPopupToggle={() => {}}
        onSortingChange={() => {}}
      />);

  wrapper.props().onSortingPopupToggle(`SPAN`);
  expect(wrapper.props().isOpen).toBeTruthy();
  wrapper.props().onSortingChange(`changed state`);
  expect(wrapper.props().sortType).toEqual(`changed state`);
});
