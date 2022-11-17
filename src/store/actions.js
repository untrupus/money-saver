import {
  REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
  LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SWITCH_THEME,
  SET_SPLASH_SCREEN,
  SET_USER,
  GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE,
  ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE
} from "./actionTypes";
import axiosApi from "../../axiosApi";
import {storeData} from "./secureStore";

export const setUser = (data) => {
  return {type: SET_USER, data};
};

const registerUserSuccess = (data) => {
  return {type: REGISTER_USER_SUCCESS, data};
};
const registerUserFailure = (error) => {
  return {type: REGISTER_USER_FAILURE, error};
};
export const registerUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.post('/auth/local/register', credentials);
      await storeData(response.data);
      dispatch(registerUserSuccess(response.data));
    } catch (error) {
      dispatch(registerUserFailure(error));
    }
  }
};

const loginUserSuccess = (data) => {
  return {type: LOGIN_USER_SUCCESS, data};
};
const loginUserFailure = (error) => {
  return {type: LOGIN_USER_FAILURE, error};
};
export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.post('/auth/local', credentials);
      await storeData(response.data);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(error));
    }
  }
};

export const logoutUser = () => {
  return {type: LOGOUT_USER};
};

export const switchTheme = (theme) => {
  return {type: SWITCH_THEME, theme};
};
export const setSplashScreen = (status) => {
  return {type: SET_SPLASH_SCREEN, status};
};

const addCategorySuccess = (data) => {
  return {type: ADD_CATEGORY_SUCCESS, data};
};
const addCategoryFailure = (error) => {
  return {type: ADD_CATEGORY_FAILURE, error};
};
export const addCategory = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.post('/categories-create', data, {headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjUyNDQzMDM4LCJleHAiOjE2NTUwMzUwMzh9.yjVeGD27s7-ub7chssqjTm6ISkWA_UjavOcOcXZHhW0'
        }});
      dispatch(addCategorySuccess(response.data));
      console.log(response.data);
    } catch (e) {
      dispatch(addCategoryFailure(e));
      console.log(e);
    }
  }
};
