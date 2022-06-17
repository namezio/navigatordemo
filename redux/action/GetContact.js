import ContactService from '../../services/ContactService';
import {GetScheduleAction} from './GetSchedule';

export const GetContactAction = {
  GET_CONTACT: 'GET_CONTACT',
};
export const InfoContact = id => async dispatch => {
  const response = await ContactService.InfoContact(id);
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
    data: response.data,
  };
};
