import CommonHelper from '../../helpers/CommonHelper';
import MeetingService from '../../services/MeetingService';
import {signUpActions} from './SignUp';

export const AddScheduleAction = {
  GET_DATA: 'GET_DATA',
  SET_ROOM: 'SET_ROOM',
  SET_HOST: 'SET_HOST',
  ADD_SCHEDULE: 'ADD_SCHEDULE',
};
export const getInit = () => async dispatch => {
  const response = await MeetingService.MettingAdd();
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
    type: AddScheduleAction.SET_ROOM,
    payload: data,
  });

export const setHost = data => dispatch =>
  dispatch({
    type: AddScheduleAction.SET_HOST,
    payload: data,
  });
export const AddSchedule = data => async dispatch => {
  // await CommonHelper.delay(1000);
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
  dispatch({
    type: AddScheduleAction.ADD_SCHEDULE,
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
