import React from "react";
import AuthScreen from "./auth-screen";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

test(`Submit event on login button pass authorization information to handler`, () => {
  const login = jest.fn();

  const wrapper = mount(
      <AuthScreen
        onSubmit={login}
        authorizationStatus={`NO_AUTH`}
      />);

  wrapper.find(`.login__form`).simulate(`submit`, {
    preventDefault() {}});

  expect(login).toHaveBeenCalled();
});
