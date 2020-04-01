import {reducer, ActionType, AuthorizationStatus, ActionCreator} from "./user";

const authInfo = {
  // eslint-disable-next-line camelcase
  avatar_url: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  // eslint-disable-next-line camelcase
  is_pro: false,
  name: `Oliver.conner`
};

test(`Reducer without additional parameter should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
  });
});

test(`Reducer should return state with authorizationStatus field contains given status`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual(
      {
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: null,
      }
  );
});

test(`Reducer should return state with authInfo field contains given data`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: null,
  }, {
    type: ActionType.GET_AUTH_INFO,
    payload: authInfo,
  })).toEqual(
      {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo,
      }
  );
});

describe(`Action creators work correctly`, () => {
  test(`Action creators for set authorization status returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });
  });

  test(`Action creators for set authInfo returns correct action`, () => {
    expect(ActionCreator.getAuthInfo(authInfo)).toEqual({
      type: ActionType.GET_AUTH_INFO,
      payload: authInfo,
    });
  });
});
