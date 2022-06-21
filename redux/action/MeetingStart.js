import MeetingService from '../../services/MeetingService';

export const startMeetingActions = {
  START: 'START',
};
export const start = () => async dispatch => {
  const response = await MeetingService.StartMeeting();
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
    type: startMeetingActions.START,
    payload: response.data,
  });
  return {
    error: false,
    message: response.message,
  };
};
