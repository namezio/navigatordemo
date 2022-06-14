import {AddContactAction} from '../action/AddContact';

const initialState = {
  contacts: [
    {
      id: 0,
      name: 'string',
      isSelected: true,
      avatarUrl: 'string',
      shortName: 'string',
      meetingId: 'string',
    },
  ],
  draw: 0,
};
const AddContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddContactAction.INIT_DATA:
      const data = action.payload;
      return {
        ...state,
        contacts: data.contacts,
        draw: data.draw,
      };
    default:
      return state;
  }
};

export default AddContactReducer;
