import MeetingService from '../../services/MeetingService';

export const GetScheduleAction = {
  GET_DATA: 'GET_DATA',
};
export const GetInfo = () => async dispatch => {
  const response = await MeetingService.GetSchedule();
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
    type: GetScheduleAction.GET_DATA,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
  };
};
