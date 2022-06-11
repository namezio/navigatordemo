import ContactService from '../../services/ContactService';

export const SearchForContactAction = {
  INIT_DATA: 'INIT_DATA',
};

export const initData = key => async dispatch => {
  const response = await ContactService.SearchforContact(key);
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
    type: SearchForContactAction.INIT_DATA,
    payload: response.data,
  });
  return {
    error: false,
    message: response.message,
    contacts: response.data.contacts,
  };
};
