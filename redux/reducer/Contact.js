import {contactActions} from '../action/Contact';

const initialState = {
  customer: {
    id: 0,
    name: '',
    isSelected: true,
    avatarUrl: '',
    shortName: '',
    meetingId: '',
  },
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
  draw: 0,
};
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactActions.GET_CONTACT:
      const data = action.payload;
      return {
        customer: data.customer,
        contacts: data.contacts,
        draw: data.draw,
      };
  }
};
