import * as React from "react";
import LocationsItem from "./locations-item";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

test(`Click event on city pass value of city to handler`, () => {
  const changeCity = jest.fn();

  const wrapper = mount(
      <LocationsItem
        activeItem={`Hamburg`}
        cityItem={`Amsterdam`}
        onChange={changeCity}
      />);

  wrapper.find(`.locations__item`).simulate(`click`, {
    target: {tagName: `SPAN`}
  });

  expect(changeCity).toHaveBeenCalledWith(`Amsterdam`);
});
