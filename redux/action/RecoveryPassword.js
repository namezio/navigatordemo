// import CommonHelper from '../../helpers/CommonHelper';
// import AuthenticateService from '../../services/AuthenticateService';

import AuthenticateService from '../../services/AuthenticateService';
import CommonHelper from '../../helpers/CommonHelper';

export const recoveryPasswordActions = {
  SET_DATA: 'SET_DATA',
  SET_LOADING: 'SET_LOADING',
};

export const setData = data => dispatch =>
  dispatch({
    type: recoveryPasswordActions.SET_DATA,
    payload: data,
  });

export const recoPass = data => async dispatch => {
  await CommonHelper.delay(1000);
  const response = await AuthenticateService.recoveryPassword(data);
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
