import CommonHelper from '../../helpers/CommonHelper';
import AuthenticateService from '../../services/AuthenticateService';
import {authActions} from './Auth';

export const InitSignUpActions = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => async dispatch => {
  const response = await AuthenticateService.initSignUp();
  if (!response) {
    return {
      error: true,
      message: response.message,
    };
  }

  if (response.error) {
    return {
      error: true,
      message: response.message,
    };
  }

  dispatch({
    type: InitSignUpActions.SET_DATA,
    payload: {
      ...data,
      ...response.data,
    },
  });

  return {
    error: false,
    message: response.message,
  };
};
