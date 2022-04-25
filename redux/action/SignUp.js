import AuthenticateService from '../../services/AuthenticateService';
import {authActions} from './Auth';

export const signUpActions = {
  INIT_DATA: 'INIT_DATA',
  SET_COUNTRY: 'SET_COUNTRY',
  SET_CAREER: 'SET_CAREER',
};

export const initData = () => async dispatch => {
  const response = await AuthenticateService.initSignUp();
  if (!response) {
    return {
      error: true,
      message: null,
    };
  }

  if (response.error) {
    return {
      error: true,
      message: response.message,
    };
  }

  dispatch({
    type: signUpActions.INIT_DATA,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};

export const setCountry = data => dispatch =>
  dispatch({
    type: signUpActions.SET_COUNTRY,
    payload: data,
  });

export const setCareer = data => dispatch =>
  dispatch({
    type: signUpActions.SET_CAREER,
    payload: data,
  });

export const registerSignUp = data => async dispatch => {
  const response = await AuthenticateService.signUp(data);
  if (!response) {
    return {
      error: true,
      message: null,
    };
  }

  if (response.error) {
    return {
      error: true,
      message: response.message,
    };
  }
  return {
    error: false,
    message: response.message,
  };
};
