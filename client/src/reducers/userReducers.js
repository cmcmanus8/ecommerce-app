import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_ERROR, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_ERROR } from "../constants/userConstants";

function userSigninReducer(state={}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userRegisterReducer(state={}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { userSigninReducer, userRegisterReducer };