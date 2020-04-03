import React from "react";
import AuthScreen from "./auth-screen";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

test(`Submit event on login button pass authorization information to handler`, () => {
  const login = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        onSubmit={login}
        authorizationStatus={`NO_AUTH`}
      />);

  input.simulate('change', {target: {value: loginValue}});
  wrapper.simulate(`submit`);

  expect(login).toHaveBeenCalledWith({
    login: this.loginRef.current.value,
    password: this.passwordRef.current.value,
  });
});
