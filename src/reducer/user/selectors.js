import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getAuthorizationInfo = (state) => {
  return state[NameSpace.USER].authInfo;
};
