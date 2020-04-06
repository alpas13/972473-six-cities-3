import * as React from "react";
import PlacesSorting from "./places-sorting";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

test(`Click event on sorting type pass sorting type to handler`, () => {
  const changeSortingType = jest.fn();

  const wrapper = mount(
      <PlacesSorting
        isOpen={true}
        sortType={`popular`}
        onSortingPopupToggle={noop}
        onSortChange={changeSortingType}
      />);

  wrapper.find(`.places__options`).simulate(`click`, {
    target: {dataset: {sort: `to-high`}}
  });

  expect(changeSortingType).toHaveBeenCalledWith(`to-high`);
});
