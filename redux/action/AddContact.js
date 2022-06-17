import ContactService from '../../services/ContactService';

export const AddContactAction = {
  INIT_DATA: 'INIT_DATA',
  GROUP_DATA: 'INIT_DATA',
  ADD_CONTACT: 'ADD_CONTACT',
};

export const initData = (key, per) => async dispatch => {
  const response = await ContactService.SearchforContact(key, per);
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
    type: AddContactAction.INIT_DATA,
    payload: response.data,
  });
  return {
    error: false,
    message: response.message,
    contacts: response.data.contacts,
  };
};
export const ContactAdd = data => async dispatch => {
  const response = await ContactService.AddContact(data);
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
    type: AddContactAction.ADD_CONTACT,
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
