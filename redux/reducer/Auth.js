import {authActions} from '../action/Auth';

const initialState = {
  username: '0975977774',
  password: '123123',
  id: 1,
  transId: '',
  fullName: 'Nguyễn Thành Hưng',
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
