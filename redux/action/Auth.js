import CommonHelper from '../../helpers/CommonHelper';
import AuthenticateService from '../../services/AuthenticateService';

export const authActions = {
  SET_DATA: 'SET_DATA',
  LOGIN: 'LOGIN',
};

export const setData = data => dispatch =>
  dispatch({
    type: authActions.SET_DATA,
    payload: data,
  });

export const login = data => async dispatch => {
  await CommonHelper.delay(500);
  const response = await AuthenticateService.signIn(data);
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
    type: authActions.LOGIN,
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
