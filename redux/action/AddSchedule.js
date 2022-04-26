import CommonHelper from '../../helpers/CommonHelper';
import MeetingService from '../../services/MeetingService';

export const AddScheduleAction = {
  GET_DATA: 'GET_DATA',
  SET_ROOM: 'SET_ROOM',
  SET_HOST: 'SET_HOST',
};
<<<<<<< HEAD
export const setRoom = data => dispatch =>
  dispatch({
=======
export const getInit = () => async dispatch => {
  const response = await MeetingService.InitAddSchedule();
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
    type: AddScheduleAction.GET_DATA,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};
export const setRoom = data => dispatch =>
  dispatch({
>>>>>>> 4f3c8713da75895b3ec09b560f97c9e30faf785f
    type: AddScheduleAction.SET_ROOM,
    payload: data,
  });

export const setHost = data => dispatch =>
  dispatch({
    type: AddScheduleAction.SET_HOST,
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
