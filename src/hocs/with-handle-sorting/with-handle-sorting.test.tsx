import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withHandleSorting from "./with-handle-sorting";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withHandleSorting(MockComponent);

test(`Should state change`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        city={`Amsterdam`}
        isOpen={false}
        sortType={`popular`}
        onSortingPopupToggle={noop}
        onSortingChange={noop}
      />);

  wrapper.props().onSortingPopupToggle();
  expect(wrapper.props().isOpen).toBeTruthy();
  wrapper.props().onSortChange(`changed state`);
  expect(wrapper.props().sortType).toEqual(`changed state`);
});
