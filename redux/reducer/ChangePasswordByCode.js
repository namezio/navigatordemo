import {ChangePasswordByCodeActions} from '../action/ChangePasswordByCode';

const initialState = {
  data: {
    email: '',
    code: '',
    password: '',
  },
  loading: false,
  code: 0,
  message: '',
  error: false,
};
const ChangePasswordByCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ChangePasswordByCodeActions.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default ChangePasswordByCodeReducer;
