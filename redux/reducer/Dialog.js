import {dialogActions} from '../action/Dialog';

const initialState = {
  alert: {
    show: false,
    message: '',
  },
  loading: {
    show: false,
    message: '',
  },
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case dialogActions.DISMISS_ALERT:
    case dialogActions.SHOW_ALERT: {
      return {
        ...state,
        alert: action.payload,
      };
    }
    case dialogActions.DISMISS_LOADING:
    case dialogActions.SHOW_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default dialogReducer;
