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
<<<<<<< HEAD
        countries: data.countries,
        careers: data.careers,
=======
        countries: [
          {
            id: data.countries.id.find(x => x.isSelected),
            name: data.countries.name,
            isSelected: data.countries.isSelected,
          },
        ],
        careers: [
          {
            id: data.careers.id.find(x => x.isSelected),
            name: data.careers.name,
            isSelected: data.careers.isSelected,
          },
        ],
        // data: {
        //   country: data.countries.find(x => x.selected),
        //   career: data.careers.find(x => x.selected),
        // },
        // countries: data.countries,
        // careers: data.careers,
>>>>>>> parent of 3954bc8 (update sign up)
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
