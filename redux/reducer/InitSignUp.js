import {InitSignUpActions} from '../action/InitSignUp';

const initialState = {
  countries: [
    {
      id: 'vn',
      name: 'Viet Nam',
      isSelected: true,
    },
  ],
  careers: [
    {
      id: 0,
      name: '1',
      isSelected: true,
    },
    {
      id: 1,
      name: '2',
      isSelected: true,
    },
    {
      id: 2,
      name: '3',
      isSelected: true,
    },
    {
      id: 3,
      name: '4',
      isSelected: true,
    },
  ],
};
const InitSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case InitSignUpActions.SET_DATA:
      return action.payload;
    default: {
      return state;
    }
  }
};

export default InitSignUpReducer;
