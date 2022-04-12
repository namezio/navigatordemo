import CommonHelper from '../../helpers/CommonHelper';
import AuthenticateService from '../../services/AuthenticateService';

export const InitAddAction = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: InitAddAction.SET_DATA,
    payload: data,
  });
