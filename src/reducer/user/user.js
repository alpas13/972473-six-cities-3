import {extend, authInfoModel} from "../../utils.js";
import {Operation as MainOperation} from "../main/main.js";
import history from "../../history/history";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_AUTH_INFO: `GET_AUTH_INFO`,
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
      payload: authInfoModel(authInfo),
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
        .then((response) => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.getAuthInfo(response.data));
        })
        .catch(() => {
        });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
        .then((response) => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          history.goBack();
          dispatch(ActionCreator.getAuthInfo(response.data));
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
  }
  return state;
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
