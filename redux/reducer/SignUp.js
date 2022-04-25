import {signUpActions} from '../action/SignUp';

const initialState = {
  countries: [
    {
      id: '',
      name: '',
      isSelected: true,
    },
  ],
  careers: [
    {
      id: 0,
      name: '',
      isSelected: true,
    },
  ],
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActions.INIT_DATA:
      const data = action.payload;
      return {
        ...state,
        countries: data.countries,
        careers: data.careers,
      };

    case signUpActions.SET_COUNTRY:
      return {
        ...state,
        data: {
          ...state.data,
          country: action.payload,
        },
      };

    case signUpActions.SET_CAREER:
      return {
        ...state,
        data: {
          ...state.data,
          career: action.payload,
        },
      };
    default:
      return state;
  }
};

export default signUpReducer;
