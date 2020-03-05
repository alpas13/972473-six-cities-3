import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActivePin from "./with-active-pin.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActivePin(MockComponent);

test(`Should state change`, () => {
  const wrapper = shallow(<MockComponentWrapped
  />);

  wrapper.props().handleMouseEnter(`changed state`);
  expect(wrapper.props().activePin).toEqual(`changed state`);
});
