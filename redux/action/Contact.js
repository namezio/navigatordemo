import ContactService from '../../services/ContactService';

export const contactActions = {
  GET_CONTACT: 'GET_CONTACT',
};
export const getContact = () => async dispatch => {
  const response = await ContactService.GetContact();
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
    type: contactActions.GET_CONTACT,
    payload: response.data,
  });

  return {
    error: false,
    message: response.message,
    customer: response.data.customer,
    contacts: response.data.contacts,
  };
};
