import {SearchForContactAction} from '../action/SearchForContact';

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
const SearchForContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchForContactAction.INIT_DATA:
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

export default SearchForContactReducer;
