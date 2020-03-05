import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

test(`Should state change`, () => {
  const wrapper = shallow(<MockComponentWrapped
    handleSelectItem={() => {}}
  />);

  wrapper.props().onChange(`changed state`);
  expect(wrapper.props().activeItem).toEqual(`changed state`);
});
