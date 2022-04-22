import {signUpActions} from '../action/SignUp';

const initialState = {
  countries: [
    {
      id: 'VN',
      name: 'VietNam',
      isSelected: true,
    },
  ],
  careers: [
    {
      id: 2,
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
        data: {
          countries: [
            {
              id: data.countries.id,
              name: data.countries.name,
              isSelected: data.countries.isSelected,
            },
          ],
          careers: [
            {
              id: data.careers.id,
              name: data.careers.name,
              isSelected: data.careers.isSelected,
            },
          ],
        },
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
