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

  const loginInput = wrapper.find(`input[name="email"]`);
  const passwordInput = wrapper.find(`input[name="password"]`);

  loginInput.simulate(`change`, {
    target: {value: `login@login.te`}});

  passwordInput.simulate(`change`, {
    target: {value: `valuePassword`}});

  wrapper.find(`.login__form`).simulate(`submit`, {
    preventDefault() {}});

  expect(login).toHaveBeenCalledWith({
    login: `valueLogin@login.test`,
    password: `valuePassword`,
  });
});
