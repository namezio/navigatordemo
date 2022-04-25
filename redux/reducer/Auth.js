import {authActions} from '../action/Auth';

const initialState = {
  id: 0,
  meetingId: '',
  fullName: '',
  avatarUrl: '',
  accessToken: '',
  loginToken: '',
  features: [],
  sliders: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case authActions.SET_DATA:
    //   return action.payload;
    case authActions.LOGIN:
      const data = action.payload;
      return {
        ...state,
        id: data.id,
        meetingId: data.meetingId,
        fullName: data.fullName,
        avatarUrl: data.avatarUrl,
        accessToken: data.accessToken,
        loginToken: data.loginToken,
        features: data.features,
        sliders: data.sliders,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
