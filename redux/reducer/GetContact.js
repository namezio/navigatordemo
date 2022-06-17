import {GetContactAction} from '../action/GetContact';

const initialState = {
  id: 0,
  isGroup: true,
  name: '',
  imageUrl: '',
  meetingId: '',
  contacts: [
    {
      id: 0,
      name: '',
      isSelected: true,
      avatarUrl: '',
      shortName: '',
      meetingId: '',
    },
  ],
};
const InfoContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetContactAction.GET_CONTACT:
      const data = action.payload;
      return {
        info: data,
      };
    default:
      return state;
  }
};
export default InfoContactReducer;
