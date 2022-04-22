export const dialogActions = {
  SHOW_ALERT: 'SHOW_ALERT',
  DISMISS_ALERT: 'DISMISS_ALERT',
  SHOW_LOADING: 'SHOW_LOADING',
  DISMISS_LOADING: 'DISMISS_LOADING',
};

export const showAlert = (message, onClose) => dispatch =>
  dispatch({
    type: dialogActions.SHOW_ALERT,
    payload: {
      show: true,
      message,
      onClose,
    },
  });

export const dismissAlert = () => dispatch =>
  dispatch({
    type: dialogActions.SHOW_ALERT,
    payload: {
      show: false,
      message: '',
    },
  });

export const showLoading = message => dispatch =>
  dispatch({
    type: dialogActions.SHOW_LOADING,
    payload: {
      show: true,
      message,
    },
  });

export const dismissLoading = () => dispatch =>
  dispatch({
    type: dialogActions.SHOW_LOADING,
    payload: {
      show: false,
      message: '',
    },
  });
