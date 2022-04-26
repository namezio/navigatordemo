import CommonHelper from '../../helpers/CommonHelper';
import MeetingService from '../../services/MeetingService';

export const AddScheduleAction = {
  SET_DATA: 'SET_DATA',
  SET_LOADING: 'SET_LOADING',
};
export const setData = data => dispatch =>
  dispatch({
    type: AddScheduleAction.SET_DATA,
    payload: data,
  });

export const Add = data => async dispatch => {
  await CommonHelper.delay(1000);
  const response = await MeetingService.AddSchedule(data);
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
