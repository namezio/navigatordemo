import {settingActions} from '../action/Setting';

const initialState = () => ({
  language: 'vi',
  isDarkTheme: false,
  name: 'TranS',
  apiServers: [
    {
      url: 'http://192.168.1.199:8080',
      default: true,
    },
  ],
  isShowWelcomeScreen: true,
});

export const migrations = {
  0: () => initialState,
};

const settingsReducer = (state = initialState(), action) => {
  switch (action.type) {
    case settingActions.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case settingActions.SET_DARK_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    case settingActions.SET_API_SERVERS:
      return {
        ...state,
        apiServers: action.payload,
      };
    case settingActions.SET_SHOW_WELCOME_SCREEN:
      return {
        ...state,
        isShowWelcomeScreen: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
