import {AuthAction} from '../action/AuthAction';

const initialState = {
  id: '0',
  fullname: 'Nguyễn Thành Hưng',
  mobile: '123456',
  email: 'abc@gmail.com',
  password: '123456',
  idCareer: 1,
  idCountry: '',
  licenseEndDate: '',
  appFeatures: [],
  accessToken: '',
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AuthAction.SET_DATA:
      return action.payload;
    case AuthAction.SIGN_IN:
      return {
        ...state,
        fullname: action.fullname,
      };
    default:
      return state;
  }
}
