import MeetingService from '../../services/MeetingService';

export const ListAction = {
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
    type: ListAction.SET_DATA,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
    data: response.data,
  };
};
