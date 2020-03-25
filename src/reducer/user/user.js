import {extend} from "../../utils.js";
import {Operation as MainOperation} from "../main/main.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
  loginPage: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_AUTH_INFO: `GET_AUTH_INFO`,
  LOGIN_PAGE_ENABLE: `LOGIN_PAGE_ENABLE`,
  LOGIN_PAGE_DISABLE: `LOGIN_PAGE_DISABLE`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  getAuthInfo: (authInfo) => {
    return {
      type: ActionType.GET_AUTH_INFO,
      payload: authInfo,
    };
  },
  loginPageEnable: () => {
    return {
      type: ActionType.LOGIN_PAGE_ENABLE,
      payload: true,
    };
  },
  loginPageDisable: () => {
    return {
      type: ActionType.LOGIN_PAGE_DISABLE,
      payload: false,
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
        .then(() => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        })
        .catch((err) => {
          throw err;
        });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
        .then((response) => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.getAuthInfo(response.data));
          dispatch(ActionCreator.loginPageDisable());
          dispatch(MainOperation.loadFavorites());
        });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload,
      });
    case ActionType.LOGIN_PAGE_ENABLE:
      return extend(state, {
        loginPage: action.payload,
      });
    case ActionType.LOGIN_PAGE_DISABLE:
      return extend(state, {
        loginPage: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
