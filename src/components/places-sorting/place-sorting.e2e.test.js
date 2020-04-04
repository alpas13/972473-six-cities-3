import React from "react";
import PlacesSorting from "./places-sorting";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

test(`Click event on sorting type pass sorting type to handler`, () => {
  const changeSortingType = jest.fn();

  const wrapper = mount(
      <PlacesSorting
        isOpen={true}
        sortType={`popular`}
        onSortingPopupToggle={() => {}}
        onSortingChange={changeSortingType}
      />);

  wrapper.find(`.places__options`).simulate(`click`, {
    target: {dataset: {sort: `to-high`}}
  });

  expect(changeSortingType).toHaveBeenCalledWith(`to-high`);
});
