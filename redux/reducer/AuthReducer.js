const initialState = {
  name: 'Nguyễn Thành Hưng',
  address: '',
  email: '',
  password: '',
  field: '',
  nation: '',
};
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    default: {
      return state;
    }
  }
}
