import MeetingService from '../../services/MeetingService';

export const GetScheduleAction = {
  SET_DATA: 'SET_DATA',
};
export const setData = data => async dispatch => {
  const response = await MeetingService.GetSchedule(data);
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
    type: GetScheduleAction.SET_DATA,
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
