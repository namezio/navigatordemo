import CommonHelper from '../../helpers/CommonHelper';
import AuthenticateService from '../../services/AuthenticateService';
import {AddScheduleAction} from './AddSchedule';

export const DeleteScheduleAction = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: DeleteScheduleAction.SET_DATA,
    payload: data,
  });

export const Delete = data => async dispatch => {
  await CommonHelper.delay(1000);
  const response = await AuthenticateService.DeleteSchedule(data);
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
