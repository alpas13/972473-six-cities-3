import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withActivePin from "./with-active-pin";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActivePin(MockComponent);

test(`Should state change`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        handleMouse={noop}
      />);

  wrapper.props().handleMouse(`changed state`);
  expect(wrapper.props().activePin).toEqual(`changed state`);
});
