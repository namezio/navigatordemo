import {freeJoinActions} from '../action/FreeJoin';

const initialState = {
  data: {
    id: '',
    displayName: '',
    microphone: true,
    video: true,
  },
  historyIDs: [],
  loading: false,
  message: '',
  error: false,
};

const freeJoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case freeJoinActions.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case freeJoinActions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default freeJoinReducer;
