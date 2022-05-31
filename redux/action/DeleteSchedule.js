import MeetingService from '../../services/MeetingService';

export const DeleteScheduleAction = {
  DELETE_DATA: 'DELETE_DATA',
};
export const setData = data => dispatch =>
  dispatch({
    type: DeleteScheduleAction.DELETE_DATA,
    payload: data,
  });

export const Delete = data => async dispatch => {
  const response = await MeetingService.DeleteSchedule(data);
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
