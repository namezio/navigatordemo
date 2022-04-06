import {recoveryPasswordActions} from '../action/RecoveryPassword';

const initialState = {
  data: {
    email: '',
  },
  loading: false,
  message: '',
  error: false,
};

const recoveryPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case recoveryPasswordActions.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default recoveryPasswordReducer;
