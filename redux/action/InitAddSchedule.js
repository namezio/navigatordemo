import MeetingService from '../../services/MeetingService';

export const InitAddAction = {
  SET_DATA: 'SET_DATA',
};
export const initData = () => async dispatch => {
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
    type: InitAddAction.SET_DATA,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};
