import {signUpActions} from '../action/SignUp';

const initialState = {
  data: {
    country: null,
    career: null,
  },
  countries: [],
  careers: [],
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpActions.INIT_DATA:
      const data = action.payload;

      return {
        ...state,
        data: {
          country: data.countries.find(x => x.selected),
          career: data.careers.find(x => x.selected),
        },
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
