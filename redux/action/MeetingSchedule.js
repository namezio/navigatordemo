import MeetingService from '../../services/MeetingService';

export const ScheduleAction = {
  SET_DATA: 'SET_DATA',
};
export const setData = () => async dispatch => {
  const response = await MeetingService.MettingList();
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
    type: ScheduleAction.SET_DATA,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};
