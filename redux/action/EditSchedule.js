import CommonHelper from '../../helpers/CommonHelper';
import AuthenticateService from '../../services/AuthenticateService';
import MeetingService from '../../services/MeetingService';

export const EditScheduleAction = {
  SET_DATA: 'SET_DATA',
  SET_LOADING: 'SET_LOADING',
};

export const setData = data => dispatch =>
  dispatch({
    type: EditScheduleAction.SET_DATA,
    payload: data,
  });

export const edit = data => async dispatch => {
  await CommonHelper.delay(1000);
  const response = await MeetingService.EditSchedule(data);
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
