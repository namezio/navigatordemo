import moment from 'moment';
import vi from 'moment/locale/vi';
import en from 'moment/locale/en-gb';

const locale = {vi, en};

export const settingActions = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_DARK_THEME: 'SET_DARK_THEME',
  SET_API_SERVERS: 'SET_API_SERVERS',
  SET_SHOW_WELCOME_SCREEN: 'SET_SHOW_WELCOME_SCREEN',
};

export const setLanguage = language => dispatch => {
  moment.updateLocale(`${language}`, locale[`${language}`]);
  dispatch({
    type: settingActions.SET_LANGUAGE,
    payload: language,
  });
};

export const setDarkTheme = isDarkTheme => dispatch => {
  dispatch({
    type: settingActions.SET_DARK_THEME,
    payload: isDarkTheme,
  });
};

export const setApiServers = apiServers => dispatch => {
  dispatch({
    type: settingActions.SET_API_SERVERS,
    payload: apiServers,
  });
};

export const setWelcomeScreen = isShow => dispatch => {
  dispatch({
    type: settingActions.SET_SHOW_WELCOME_SCREEN,
    payload: isShow,
  });
};
