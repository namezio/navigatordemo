import {authActions} from '../action/Auth';

const initialState = {
  username: '',
  password: '',
  id: 0,
  transId: '',
  fullName: '',
  avatarUrl: '',
  licenseEndDate: '',
  appFeatures: [],
  accessToken: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_DATA:
      return action.payload;
    default: {
      return state;
    }
  }
};

export default authReducer;
