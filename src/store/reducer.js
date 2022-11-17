import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SWITCH_THEME,
  SET_SPLASH_SCREEN,
  SET_USER,
} from "./actionTypes";

const initialState = {
  theme: 'dark',
  splash: true,
  language: 'eng',
  user: null,
  registerUserError: null,
  loginUserError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.data};
    case REGISTER_USER_SUCCESS:
      return {...state, user: action.data, registerUserError: null};
    case REGISTER_USER_FAILURE:
      return {...state, registerUserError: action.error};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.data, loginUserError: null};
    case LOGIN_USER_FAILURE:
      return {...state, loginUserError: action.error};
    case LOGOUT_USER:
      return {...state, user: null};
    case SWITCH_THEME:
      return {...state, theme: action.theme};
    case SET_SPLASH_SCREEN:
      return {...state, splash: action.status};
    default:
      return {...state};
  }
};

export default reducer;
